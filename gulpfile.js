
'use strict';

var gulp = require('gulp')
  , exec = require('child_process').exec
  , downloadatomshell = require('gulp-download-atom-shell')
  , fs   = require('fs')
  , path = require('path')
  , chalk = require('chalk')
  , dir  = 'binaries'
  , appPath  = 'yoGitClient/gitApiTest';

gulp.task('init', function(cb) {
  cb();
})

gulp.task('downloadatomshell', ['init'], function(cb) {
  downloadatomshell({
    version: '0.15.4',
    outputDir: dir
  }, cb);
});

gulp.task('install', ['init', 'downloadatomshell']);

gulp.task('run', ['install'], function(cb) {
  var cmd;

  if (process.platform === 'darwin') {
    cmd = dir + '/Atom.app/Contents/MacOS/Atom ' + appPath;
  } else if (process.platform === 'win32') {
    cmd = dir + '\\atom.exe ' + appPath;
  } else {
    cmd = 'chmod +x ' + dir + '/atom && ' + dir + '/atom ' + appPath;
  }

  var cp = exec(cmd, function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });

  console.log('Command:', chalk.yellow(cmd));
  cp.stdout.pipe(process.stdout);
  cp.stderr.pipe(process.stderr);
});

gulp.task('default', ['run']);

