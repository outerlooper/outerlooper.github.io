const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser'); 
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

const imgSrc = './src/images/**/*';
const fontSrc = './src/fonts/**/*';
const venSrc = './src/vendor/**/*';
const cssSrc = './src/scss/**/*.scss';
const jsSrc = [
  './src/js/c.js',
  './src/js/b.js',
  './src/js/a.js',
  './src/js/**/*.js'
];

const imgDest = './dist/images';
const fontDest = './dist/fonts';
const venDest = './dist/vendor';
const cssDest = './dist/css';
const jsDest = './dist/js';

function images() {
  return gulp.src(imgSrc)
    .pipe(imagemin())
    .pipe(gulp.dest(imgDest));
}

function fonts() {
  return gulp.src(fontSrc)
  .pipe(gulp.dest(fontDest)); // pipe is like js async then, waits until ready
}

function vendor() {
  return gulp.src(venSrc)
  .pipe(gulp.dest(venDest)); // pipe is like js async then, waits until ready
}

function css() {
  return gulp.src(cssSrc)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());
}

function cssMin() {
  return gulp.src(cssSrc)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(
      sass({
        outputStyle: 'compressed',
      }).on('error', sass.logError)
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());
}

function js() {
  return gulp.src(jsSrc)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(concat('outerlooper.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.stream());
}

function jsMin() {
  return gulp.src(jsSrc)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(concat('outerlooper.js'))
    .pipe(terser()) // minifies js including es6, gulp-uglify does not do es6
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(cssSrc, gulp.series(css, cssMin));
  gulp.watch(jsSrc, gulp.series(js, jsMin));
  gulp.watch('./**/*.html').on('change', browserSync.reload);
}

exports.images = images; // graphics
exports.fonts = fonts; // font icons
exports.vendor = vendor; // vendor files
exports.css = css; // compile scss to css
exports.cssMin = cssMin; // minify css
exports.js = js; // concat js
exports.jsMin = jsMin; // minify js
exports.watch = watch; // rowserSync

exports.default = gulp.series(gulp.parallel(images, fonts, vendor, css, cssMin, js, jsMin), watch);