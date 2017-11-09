/*jshint globalstrict: true*/
/*global require*/

'use strict'

const gulp = require('gulp')
const util = require('util')
const jdists = require('gulp-jdists')
const rename = require('gulp-rename')
const examplejs = require('gulp-examplejs')
const typescript = require('gulp-typescript')
const replace = require('gulp-replace')
const merge2 = require('merge2')
const pkg = require('./package')

gulp.task('build', function () {
  var tsResult = gulp.src(`src/index.ts`)
    .pipe(jdists())
    .pipe(gulp.dest('lib'))
    .pipe(typescript({
      target: 'ES5',
      module: 'commonjs',
      declaration: true,
    }))

  return merge2([
    tsResult.dts.pipe(gulp.dest('./lib')),
    tsResult.js.pipe(gulp.dest('./lib'))
  ])
})

gulp.task('example', function () {
  return gulp.src([
    'src/*.ts'
  ])
    .pipe(examplejs({
      header: `
global.processor = require('../')
      `
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('test'))
})

gulp.task('dist', ['build', 'example'])