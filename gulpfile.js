'use strict';

const { src, dest, series, parallel, watch } = require('gulp');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');

const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');

const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const imagemin = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');

const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const del = require('del');

const server = require('browser-sync').create();

function processSass() {
  return src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(dest('build/css'))
    .pipe(server.stream());
}
exports.processSass = processSass;

function processHtml() {
  return src('source/*.html')
    .pipe(posthtml([
      include()
    ]))
    .pipe(dest('build'));
}
exports.processHtml = processHtml;

function buildJs() {
  return src('source/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('script.js'))
    .pipe(dest('build/js'))
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(dest('build/js'))
}
exports.buildJs = buildJs;

function copyFonts() {
  return src('source/fonts/**/*.{woff,woff2}')
    .pipe(dest('build/fonts'));
}
exports.copyFonts = copyFonts;

function copyImg() {
  return src('source/img/**/*.{jpg,jpeg,png,svg,webp}')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo()
    ]))
    .pipe(dest('build/img'));
}
exports.copyImg = copyImg;

function generateSvgSprite() {
  return src('source/img/{icon-*.svg,logo-*.svg}')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(dest('build/img'));
}
exports.generateSvgSprite = generateSvgSprite;

function cleanBuildDir() {
  return del('build');
}
exports.cleanBuildDir = cleanBuildDir;

function reload(done) {
  server.reload();
  done();
}

function serve() {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  watch('source/sass/**/*.{scss,sass}', series(processSass));
  watch('source/*.html', series(processHtml, reload));
  watch('source/js/**/*.js', series(buildJs, reload));
  watch(['source/img/**/*.{jpg,jpeg,png,svg,webp}', '!source/img/**/{icon-*.svg,logo-*.svg}'], series(copyImg, reload));
  watch('source/img/**/{icon-*.svg,logo-*.svg}', series(generateSvgSprite, copyImg, reload));
  watch('source/fonts/**/*.{woff,woff2}', series(copyFonts, reload));
}
exports.serve = serve;

exports.build = series(
  cleanBuildDir,
  parallel(copyFonts, copyImg),
  generateSvgSprite,
  parallel(processHtml, processSass, buildJs)
);

exports.default = series(
  cleanBuildDir,
  parallel(copyFonts, copyImg),
  generateSvgSprite,
  parallel(processHtml, processSass, buildJs),
  serve
);
