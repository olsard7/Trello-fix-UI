'use strict';

const gulp = require('gulp');

var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass')(require('sass'));

gulp.task('default', function () {
    return gulp.src([
        './src/fix-labels.scss',
        './src/fix-ui.scss',
    ])
        .pipe(sass())
        .pipe(concatCss('bundle.css'))
        .pipe(gulp.dest('dest'));
  });