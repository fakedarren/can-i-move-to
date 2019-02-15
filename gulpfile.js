/* eslint-disable */
var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function(){
  return gulp.src('src/public/scss/styles.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/public/css'))
});


gulp.task('default', function(){
  gulp.watch('src/public/scss/**/*.scss', gulp.series('sass'));
});
