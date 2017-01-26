var gulp = require('gulp');
var concat = require('gulp-concat');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
    gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('Page/assets/js'));
});

