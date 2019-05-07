'use scrict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');

const reload = browserSync.reload;

const browserSyncConfig = {
  notify: false,
  // Disable open automatically when Browsersync starts.
  open: true,
  server: ['./'],
  port: 3000,
};

gulp.task('style:demo', () => {
  return gulp
    .src('./demo/src/**/*.scss')
    .pipe(sass({ precision: 10 }).on('error', sass.logError))
    .pipe(postcss([autoprefixer({ cascade: false })]))
    .pipe(gulp.dest('./demo/dist/asset/css'));
});

gulp.task('build', ['style:demo']);

gulp.task('serve', ['build'], () => {
  browserSync(browserSyncConfig);

  gulp.watch(['./src/**/*.scss'], ['style:demo', reload]);
  gulp.watch(['./demo/src/**/*.scss'], ['style:demo', reload]);
});
