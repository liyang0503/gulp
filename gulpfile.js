/*global -$ */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var contentIncluder = require('gulp-content-includer');
var cleanCss = require('gulp-clean-css');
var qiniu = require('gulp-qiniu-upload');
var ossUpload = require('gulp-oss-upload');
var version = "/start";

gulp.task('html', function () {
  gulp.src('./public/html/**/*.html')
    .pipe(contentIncluder({//模块合并
      includerReg: /<!\-\-include\s+"([^"]+)"\-\->/g
    }))
    .pipe(contentIncluder({//替换css js路径
      includerReg: /<!\-\-inLink\s+'([^']+)'\-\->/g
    }))
    .pipe(gulp.dest('./dist/html'));
});

gulp.task('css', function () {
  gulp.src(['./public/css/*.css', '!public/css/color.css'])
    .pipe($.autoprefixer({
      browsers: ['last 6 versions'],
      cascade: false
    }))
    .pipe(cleanCss())
    // .pipe($.rename({suffix: version}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function () {
  gulp.src('./public/js/plugin/*')
    .pipe(gulp.dest('./dist/js/plugin'));
  gulp.src('./public/js/moudles/*')
    .pipe(gulp.dest('./dist/js/modules'))
});

gulp.task('images', function () {
  gulp.src('./public/images/*.*')
  // .pipe($.cache($.imagemin({
  //   progressive: true,
  //   interlaced: true
  // })))
    .pipe(gulp.dest('./dist/images'));
});

// qiniu
gulp.task('qn', function () {
  gulp.src('./dist/css/*.css')
    .pipe(qiniu({
      accessKey: "v_jjrliJ4H8IZJ_QZhAuZi12jXg2JrTxhs_iNBOS",
      secretKey: "-1pjSfPJYjPTPmM6wG9r6ihinbePJWNA1ehC9aiv",
      bucket: "liyang",
      private: false
    }, {
      dir: '/',
      versioning: true,
      versionFile: './cdn.json',
      concurrent: 10
    }));
});

// alioss
gulp.task('oss', function () {
  gulp.src("./dist/css/*.css")
    .pipe(ossUpload({
      accessKeyId: "LTAIzwDF8NRCe3t8",
      accessKeySecret: "ZZO3X0S0HqmPpxZpR7pursAh8pOlT9",
      bucket: 'liyangoss',
      endpoint: 'oss-cn-beijing.aliyuncs.com',
      rootDir: '/css' + version
    }));
});

gulp.task('default', [
  'css',
  'images',
  'js',
  'html'
], function () {
  gulp.watch('./public/css/*.css', ['css']);
  gulp.watch('./public/js/**/*', ['js']);
  gulp.watch('./public/images/*.*', ['images']);
  gulp.watch('./public/html/**/*.html', ['html']);
  gulp.watch('./public/views/**/*.*', ['html']);
});