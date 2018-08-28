var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    rename      = require('gulp-rename'),
    criticalCss = require('gulp-critical-css'),
    sass        = require('gulp-sass'),
    prefixer    = require('gulp-autoprefixer'),
    csscomb     = require('gulp-csscomb'),
    media_group = require('gulp-group-css-media-queries'),
    cssmin      = require('gulp-minify-css'),

    //js
    imports     = require('gulp-imports'),
    uglify      = require('gulp-uglify'),

    //img
    tinypng = require('gulp-tinypng-unlimited');




gulp.task('css:build', function() {
    gulp.src('src/css/main.scss')
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(prefixer({
            browsers: ['last 15 versions'],
            cascade: false,
            grid: true
        }))
        .pipe(media_group())
        .pipe(csscomb('yandex'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(cssmin())
        .pipe(criticalCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css/'))
        
});



gulp.task('js:build', function() {
    return gulp.src('src/js/main.js')
        .pipe(imports())
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('dist/js/'))
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist/js/'))
})


gulp.task('img:optimize', function () {
    return gulp.src('src/images/*.*')
        .pipe(tinypng())
        .pipe(gulp.dest('dist/images/'))
});