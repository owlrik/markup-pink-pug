"use strict";

const gulp = require("gulp");

const sass = require("gulp-sass");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssmin = require("gulp-csso");

const rename = require("gulp-rename");
const del = require("del");
const plumber = require("gulp-plumber");
const server = require("browser-sync").create();

//const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");

function style() {
	return gulp.src("source/sass/style.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest("build/css"))
		.pipe(cssmin())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("build/css"));
		//.pipe(server.stream());
}

function images() {
	return gulp.src("source/img/**/*.{png,jpg,svg}")
		.pipe(imagemin([
			imagemin.optipng({optimizationLevel: 3}),
			imagemin.jpegtran({progressive: true}),
			imagemin.svgo()
		]))
		.pipe(gulp.dest("build/img"));
}

//function webp() {
//	return gulp.src("source/img/**/*.{png,jpg}")
//		.pipe(webp({quality: 90}))
//		.pipe(gulp.dest("build/img"));
//}

function sprite() {
	return gulp.src("source/img/{icon-*.svg,logo-*.svg}")
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename("sprite.svg"))
		.pipe(gulp.dest("build/img"));
}

function html() {
	return gulp.src("source/*.html")
		.pipe(posthtml([
			include()
		]))
		.pipe(gulp.dest("build"));
}

function clean() {
	return del("build");
}

function copy() {
	return gulp.src([
		"source/fonts/**/*.{woff,woff2}",
		"source/img/**",
		"source/js/**"
		], {
			base: "source"
		})
		.pipe(gulp.dest("build"));
}

function watch() {
	gulp.watch("source/sass/**/*.{scss,sass}", style);
	gulp.watch("source/*.html", html);
}

function serve() {
	server.init({
      server: {
        baseDir: "build/"
      }
    });
	server.watch("build/**/*", server.reload);
}

exports.style = style;
exports.html = html;
exports.images = images;
//exports.webp = webp;
exports.sprite = sprite;
exports.clean = clean;
exports.copy = copy;
exports.watch = watch;

// gulp.task("build", gulp.series(
//   clean,
//   copy,
//   gulp.parallel(
// 	style,
// 	sprite,
// 	html,
// 	images)
// ));

// gulp.task("default", gulp.series(
//   clean,
//   copy,
//   gulp.parallel(
//     style,
//     sprite,
//     html,
//     images),
//   gulp.parallel(watch, serve)
// ));

gulp.task("build", gulp.series(
  clean,
  copy,
  style,
  sprite,
  html,
  images
));

gulp.task("default", gulp.series(
  clean,
  copy,
  style,
  sprite,
  html,
  images,
  gulp.parallel(watch, serve)
));
