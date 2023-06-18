'use strict';

const gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('default', function () {
    return gulp.src([
        './src/reset.css',
        './src/astyles.css',
    ])
      .pipe(concatCss('bundle.css'))
      .pipe(gulp.dest('dest'));
  });