var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var sync = require('browser-sync');
var plum = require('gulp-plumber');
var source = require("vinyl-source-stream");
var run = require('gulp-run');


var tasks = {};
var paths = {};

paths.jsx = "./client/app/app.jsx";






tasks.jsx = function(){

  console.log("task jsx start");
  browserify({
      entries: [paths.jsx],
      transform: [reactify]
  })
  .bundle()
  .pipe(plum(function(res){
      sync.notify("jsx compile error");
  }))
  .pipe(source('bundle.js'))
  .pipe(gulp.dest("./client/app/"))
  .on('end',function(){
      sync.notify('ファイルを更新');
      // browserSync.reload();
  });


};



gulp.task('jsx', function() {
  tasks.jsx();
});

gulp.task('grunt', function(){
  run('grunt serve').exec();
});

gulp.task('default', ['jsx','grunt']);
