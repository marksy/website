(function(){
  'use strict';

  var gulp = require('gulp');
  var connect = require('gulp-connect'); //Runs a local dev server
  var open = require('gulp-open'); //Open a URL in a web browser
  var browserify = require('browserify'); // Bundles JS
  var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
  var concat = require('gulp-concat'); //Concatenates files
  var jshint = require('gulp-jshint'); //Lint JS files
  var sass = require('gulp-sass'); //build Sass
  var imagemin = require('gulp-imagemin');//compresses images

  var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
      html: './src/*.html',
      partials: './src/partials/**/*.html',
      js: './src/app.js',
      images: [
        './src/images/**/*.gif',
        './src/images/**/*.jpg',
        './src/images/**/*.png'
      ],
      sass: './src/scss/**/*.scss',
      dist: './dist',
      mainJs: './src/app.js'
    }
  };

  //Start a local development server
  gulp.task('connect', function() {
    connect.server({
      root: ['dist'],
      port: config.port,
      base: config.devBaseUrl,
      livereload: true
    });
  });

  gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
      .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
  });

  gulp.task('html', function() {
    gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(connect.reload());
  });

  gulp.task('js', function() {
    browserify(config.paths.js)
      .bundle()
      .on('error', console.error.bind(console))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(config.paths.dist + '/scripts'))
      .pipe(connect.reload());
  });

  // gulp.task('css', function() {
  //   gulp.src(config.paths.css)
  //     .pipe(concat('bundle.css'))
  //     .pipe(gulp.dest(config.paths.dist + '/css'))
  //     .pipe(connect.reload());
  // });

  gulp.task('partials', function() {
    gulp.src(config.paths.partials)
    .pipe(gulp.dest(config.paths.dist + '/partials'))
    .pipe(connect.reload());
  });

  // Migrates images to dist folder
  // Note that I could even optimize my images here
  gulp.task('images', function () {
      gulp.src(config.paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

      //publish favicon
      gulp.src('./src/favicon.ico')
          .pipe(gulp.dest(config.paths.dist));
  });

  gulp.task('jshint', function() {
    return gulp.src(config.paths.js)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
  });

  gulp.task('sass', function() {
      gulp.src(config.paths.sass)
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest(config.paths.dist + '/css/'))
          .pipe(connect.reload());
      console.log('sass processed');
  });


  gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.partials, ['partials']);
    gulp.watch(config.paths.sass, ['sass']);
    gulp.watch(config.paths.images, ['images']);
    gulp.watch(config.paths.js, ['js', 'jshint']);
  });

  gulp.task('default', [
    'html',
    'js',
    'jshint',
    'partials',
    'images',
    'sass',
    'open',
    'watch'
    ]);

})();
