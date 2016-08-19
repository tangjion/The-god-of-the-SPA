'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');


/*
 *  编译SCSS
 */
gulp.task('scss2css', function () {
    gulp.src('./resource/styles/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefix({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true,
            remove: true
        }))
        .pipe(gulp.dest('./resource/styles/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./resource/styles/css'))
        .pipe(notify({ message: 'SCSS task complete' }));
});

gulp.task('watch', function () {
    gulp.watch('./resource/styles/sass/**/*.scss', ['scss2css']);
});