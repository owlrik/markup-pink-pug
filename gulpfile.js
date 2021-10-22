'use strict';

const { src, dest, series, parallel, watch } = require('gulp');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');

const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');
const htmlmin = require('gulp-htmlmin');

const terser = require('gulp-terser');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');

const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const rename = require('gulp-rename');
const gulpIf = require('gulp-if');
const del = require('del');

const ghpages = require('gh-pages');

const server = require('browser-sync').create();

let isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const cleanBuildDir = () => {
  return del('build');
};

const reload = (done) => {
  server.reload();
  done();
};

const buildPages = () => {
  return src('source/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(dest('build'));
};

const buildStyles = () => {
  return src('source/sass/style.scss', {sourcemaps: true})
    .pipe(plumber())
    .pipe(sass({
      includePaths: ['node_modules']
    }))
    .pipe(postcss([
      autoprefixer({
        grid: 'no-autoplace'
      })
    ]))
    .pipe(dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulpIf(isDev, dest('build/css', {sourcemaps: '.'}), dest('build/css')))
    .pipe(gulpIf(isDev, server.stream()));
};

const buildScripts = () => {
  return src([
    'node_modules/picturefill/dist/picturefill.min.js',
    'node_modules/object-fit-images/dist/ofi.min.js',
    'node_modules/svg4everybody/dist/svg4everybody.min.js'
  ])
    .pipe(src([
      'source/js/lib/**/*.js',
      'source/js/utils/**/*.js',
      'source/js/script.js'], {sourcemaps: true}))
    .pipe(plumber())
    .pipe(babel({
      presets: ['@babel/env'],
      ignore: ['node_modules']
    }))
    .pipe(concat('script.js'))
    .pipe(dest('build/js'))
    .pipe(terser())
    .pipe(rename('script.min.js'))
    .pipe(gulpIf(isDev, dest('build/js', {sourcemaps: '.'}), dest('build/js')));
};

const optimizeSvg = () => {
  return src('source/img/**/*.{svg}')
    .pipe(changed('source/img'))
    .pipe(imagemin([
      imagemin.svgo()
    ]))
    .pipe(dest('source/img'));
};

const buildSvgSprite = () => {
  return src('source/img/sprites/svg/*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(dest('build/img/sprites'));
};

const optimizeImages = () => {
  return src('build/img/**/*.{jpg,png}')
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
    ]))
    .pipe(dest('build/img'));
};

const createWebp = () => {
  return src('source/img/**/*.{jpg,png}')
    .pipe(webp({
      quality: 90
    }))
    .pipe(dest('source/img'));
};

const copyImages = () => {
  return src(['source/img/**/*.{jpg,jpeg,png,svg,webp}', '!source/img/sprites/**/*.{jpg,jpeg,png,svg,webp}'], {base: 'source'})
    .pipe(changed('build/img'))
    .pipe(dest('build'));
};

const copyFonts = () => {
  return src('source/fonts/**/*.{woff,woff2}')
    .pipe(changed('build/fonts'))
    .pipe(dest('build/fonts'));
};

const copyMisc = () => {
  return src([
    'src/*',
    'src/data/**',
    'src/file/**',
    'src/video/**',
  ], {
    base: 'source',
  })
    .pipe(dest('build'));
};

const syncServer = () => {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  watch('source/*.html', series(buildPages, reload));
  watch('source/sass/**/*.{scss,sass}', series(buildStyles));
  watch('source/js/**/*.js', series(buildScripts, reload));
  watch(['source/img/**/*.{jpg,jpeg,png,svg,webp}', '!source/img/sprites/**/*.svg'], series(optimizeSvg, copyImages, reload));
  watch('source/img/sprites/svg/*.svg', series(optimizeSvg, buildSvgSprite, reload));
  watch('source/fonts/**/*.{woff,woff2}', series(copyFonts, reload));
  watch('source/*.*', series(copyMisc, reload));
};

const deploy = (cb) => {
  ghpages.publish('build/', cb);
}

const build = series(
  cleanBuildDir,
  optimizeSvg,
  parallel(
    copyMisc,
    copyFonts,
    copyImages,
    buildSvgSprite,
    buildStyles,
    buildScripts,
    buildPages
  )
);

const start = series(build, syncServer);

exports.build = build;
exports.start = start;
exports.webp = createWebp;
exports.imagemin = optimizeImages;
exports.deploy = deploy;
