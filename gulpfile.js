var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var runSequence = require('run-sequence');
var react = require("gulp-react");
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var concat = require('gulp-concat');

gulp.task('browserify', function(){
  var files = [
    "app/js/main.js"
  ];
  var b = browserify(files);
  b.transform(reactify); // use the reactify transform
  return b.bundle()
    .pipe(source('mainBundle.js'))
    .pipe(gulp.dest('app/js-built/'));
});

gulp.task("sass", function(){
  return  gulp.src("app/scss/*.scss")
          .pipe(sass())
          .pipe(gulp.dest("app/css-built"))
          .pipe(concat('styles.css'))
          .pipe(gulp.dest('app/css-built/'))
          .pipe(browserSync.reload({ // Compile sass into CSS & auto-inject into browsers
            stream: true
          }));
});

gulp.task("browserSync", function() {
  browserSync({
    server: {
      baseDir: ["app"]
    },
  });
});

// Optimizing CSS and JavaScript
gulp.task('useref', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', minifyCSS()))
    // Uglifies only if it's a Javascript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('./dist'));
});

gulp.task("watch", ["browserSync", "sass"], function(){
    gulp.watch("app/scss/*.scss", ["sass"]);
    gulp.watch("app/js/**/*.js", ["browserify"]);

    gulp.watch("app/css-built/*.css").on('change', browserSync.reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js-built/mainBundle.js").on('change', browserSync.reload);
});

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserify', 'browserSync', 'watch'],
    callback
  );
});

gulp.task('build', function(callback) {
  runSequence(['browserify', 'sass', 'useref'],
    callback
  );
});
