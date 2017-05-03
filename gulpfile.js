var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var del = require('del');
var browserSync = require('browser-sync').create();

var paths = {
    app: 'app',
    build: 'build',
    scripts: ['app/scripts/**/*.js', '!node_modules', '!bower_modules'],
    styles: ['app/styles/**/*.scss', '!node_modules', '!bower_modules']
};

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('sass', function () {
    return gulp.src(paths.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.build + '/styles'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(paths.build + '/scripts'))
        .pipe(browserSync.stream());
});

gulp.task('copy:html', function () {
    return gulp.src(paths.app + '/index.html')
        .pipe(gulp.dest(''))
        .pipe(browserSync.stream());
});

gulp.task('copy:assets', function () {
    return gulp.src(paths.app + '/assets/**/*')
        .pipe(gulp.dest('build/assets'))
        .pipe(browserSync.stream());
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['sass']);
    gulp.watch(paths.app + '/index.html', ['copy:html']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['browser-sync', 'watch', 'sass', 'scripts', 'copy:html', 'copy:assets']);
gulp.task('build', ['sass', 'scripts', 'copy:html']);
