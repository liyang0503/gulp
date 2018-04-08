/*global -$ */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var contentIncluder = require('gulp-content-includer');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('html', function () {
    gulp.src("public/html/**/*.html")
        .pipe(contentIncluder({//模块合并
            includerReg: /<!\-\-include\s+"([^"]+)"\-\->/g
        }))
        .pipe(contentIncluder({//替换css js路径
            includerReg: /<!\-\-inLink\s+'([^']+)'\-\->/g
        }))
        .pipe(gulp.dest('dist/html'));
});

gulp.task('css', function () {
    gulp.src(['public/css/*.css', '!public/css/color.css'])
        .pipe($.autoprefixer({
            browsers: ['last 6 versions'],
            cascade: false
        }))
        .pipe($.rename({suffix: '.min'}))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'))
        //版本号
        .pipe($.rev())
        .pipe($.rev.manifest())
        .pipe(gulp.dest('rev/css'));
});

gulp.task('images', function () {
    gulp.src('public/images/*.*')
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('js', function () {
    gulp.src('public/js/plugin/*')
        .pipe(gulp.dest('dist/js/plugin'));
    gulp.src('public/js/moudles/*')
        .pipe($.rename({suffix: '.min'}))
        .pipe($.uglify())
        .pipe(gulp.dest('dist/js/moudles'));
});

gulp.task('url', function () {
    gulp.src(['/rev/*.json', 'dist/html/*.html'])
        .pipe($.revCollector())
        .pipe(gulp.dest('View'));
});

gulp.task('fonts', function () {
    // gulp.src(require('main-bower-files')().concat(['bower_components/bootstrap/fonts/**/*']))
    //    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2,otf}'))
    //    .pipe($.flatten())
    //    .pipe(gulp.dest('dist/fonts'));
});

// 将bower的库文件对应到指定位置
gulp.task('bowerFiles', function () {
    //js
    // gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
    //    .pipe(gulp.dest('dist/js/bootstrap'));
    // gulp.src('./bower_components/jquery/dist/jquery.min.js')
    //    .pipe(gulp.dest('dist/js/jquery'));
    //css
    // gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
    //    .pipe(gulp.dest('dist/css/bootstrap'));
});

gulp.task('default', [
    'html',
    'css',
    'images',
    'js',
    'url'
], function () {
    gulp.watch('public/html/**/*.html', ['html']);
    gulp.watch('public/views/**/*.*', ['html']);
    gulp.watch('public/css/*.css', ['css']);
    gulp.watch('public/css/*.css', ['url']);
    gulp.watch('public/images/*.*', ['images']);
    gulp.watch('public/js/**/*', ['js']);
    gulp.watch('public/js/**/*', ['url']);
});