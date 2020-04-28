'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var htmlbeautify = require('gulp-html-beautify');

// run this task by typing in 'gulp pug' in CLI
function processPugFiles() {

  return gulp.src('./Emails/**/*.pug')
    .pipe(pug())
    // https://github.com/beautify-web/js-beautify#css--html
    .pipe(htmlbeautify({
      indent_size: 2,
      "wrap_attributes": "force-aligned"
    }))
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));

}
exports.pug = processPugFiles;
exports.default = processPugFiles;

function watch(done) {
  gulp.watch([
    'Emails/**/*.pug',
    'Emails/**/content-part/*.html',
    'emails_include/**/*.pug',
    'emails_include/**/*.html'
  ], processPugFiles);
  done();
}
exports.watch = gulp.series(watch);
