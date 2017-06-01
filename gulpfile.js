const gulp = require('gulp');
const htmlmin = require("gulp-html-minify");
const imgmin = require("gulp-imagemin");
const jsmin = require('gulp-jsmin');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const ghPages = require('gulp-gh-pages');
const clean = require('gulp-clean');

gulp.task('css', () => {
    return gulp
        .src('src/css/index.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/'))
});

gulp.task('html', () => {
    return gulp
        .src('index.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('dist/'))
})

gulp.task('img', () => {
    gulp
        .src('src/img/**/*')
        .pipe(imgmin([]))
        .pipe(gulp.dest('dist/img'))
})

gulp.task('js', () => {
    return gulp
        .src(['./src/js/!(index)**.js', './src/js/index.js'])
        .pipe(jsmin())
        .pipe(concat('index.min.js'))
        .pipe(gulp.dest('dist/'))
})

gulp.task('clean', () => {
    return gulp
        .src('dist/')
        .pipe(clean())
})

gulp.task('ghpages', () => {
    return gulp
        .src('./dist/**/*')
        .pipe(ghPages())
})

gulp.task('build', ['clean'], () => gulp.start(['img', 'css', 'html', 'js']))
