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

const htmlSrc = [
  './CNAME', 
  './README.md', 
  './manifest.json',
  './index.html'];
const imgSrc = './assets/images/**/*';
const fontSrc = './assets/fonts/**/*';
const venSrc = './assets/vendor/**/*';
const cssSrc = './assets/scss/**/*.scss';
const jsSrc = [
  //'./assets/scripts/c.js',
  //'./assets/scripts/b.js',
  //'./assets/scripts/a.js',
  './assets/scripts/**/*.js'
];
const pgSrc_About = './about/index.html';
const pgSrc_Design = './design/index.html';
const pgSrc_Drawing = './drawing/index.html';
const pgSrc_Music = './music/index.html';
const pgSrc_Photography = './photography/index.html';
const pgSrc_Web = './web/index.html';

const rootDest = './dist/';
const imgDest = './dist/assets/images';
const fontDest = './dist/assets/fonts';
const venDest = './dist/assets/vendor';
const cssDest = './dist/assets/css';
const jsDest = './dist/assets/js';
const pgDest_About = './dist/about/index.html';
const pgDest_Design = './dist/design/index.html';
const pgDest_Drawing = './dist/drawing/index.html';
const pgDest_Music = './dist/music/index.html';
const pgDest_Photography = './dist/photography/index.html';
const pgDest_Web = './dist/web/index.html';

const cssDev = './assets/css/'; // local dev build
const jsDev = './assets/js/'; // local dev build

function html() {
  return gulp.src(htmlSrc)
    .pipe(gulp.dest(rootDest));
}

function pgAbout() {
  return gulp.src(pgSrc_About)
    .pipe(gulp.dest(pgDest_About));
}

function pgDesign() {
  return gulp.src(pgSrc_Design)
    .pipe(gulp.dest(pgDest_Design));
}

function pgDrawing() {
  return gulp.src(pgSrc_Drawing)
    .pipe(gulp.dest(pgDest_Drawing));
}

function pgMusic() {
  return gulp.src(pgSrc_Music)
    .pipe(gulp.dest(pgDest_Music));
}

function pgPhotography() {
  return gulp.src(pgSrc_Photography)
    .pipe(gulp.dest(pgDest_Photography));
}

function pgWeb() {
  return gulp.src(pgSrc_Web)
    .pipe(gulp.dest(pgDest_Web));
}

function icons() {
  return gulp.src([
    './*.ico',
    './*.png'
  ])
    .pipe(imagemin())
    .pipe(gulp.dest(rootDest));
}

function images() {
  return gulp.src(imgSrc)
    //.pipe(imagemin())
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
    .pipe(gulp.dest(cssDev))
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
    .pipe(gulp.dest(cssDev))
    .pipe(browserSync.stream());
}

function js() {
  return gulp.src(jsSrc)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(concat('outerlooper.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(jsDest))
    .pipe(gulp.dest(jsDev))
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
    .pipe(gulp.dest(jsDev))
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
  gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.pgAbout = pgAbout; // page
exports.pgDesign = pgDesign; // page
exports.pgDrawing = pgDrawing; // page
exports.pgMusic = pgMusic; // page
exports.pgPhotography = pgPhotography; // page
exports.pgWeb = pgWeb; // page

exports.html = html; // root files
exports.icons = icons; // icons in root
exports.images = images; // graphics
exports.fonts = fonts; // font icons
exports.vendor = vendor; // vendor files
exports.css = css; // compile scss to css
exports.cssMin = cssMin; // minify css
exports.js = js; // concat js
exports.jsMin = jsMin; // minify js
exports.watch = watch; // rowserSync

exports.default = gulp.series(gulp.parallel(
    pgAbout, pgDesign, pgDrawing, pgMusic, pgPhotography, pgWeb,
    html, icons, images, fonts, vendor, css, cssMin, js, jsMin
    ), watch);