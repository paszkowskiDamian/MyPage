var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', ()=>{
    gulp.src(['ng/module.js','ng/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('Page/assets/js'));
} );

