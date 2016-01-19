var gulp = require('gulp'),
    concat = require('gulp-concat'),
    requireDir = require('require-dir'),
    distDir = './dist',
    appModules = [
      './src/*.mdl.js',
      './src/**/*.mdl.js',
      './src/**/**/*.mdl.js',
      './src/**/**/**/*.mdl.js',
      './src/*.js',
      './src/**/*.js'],
 	  dependencies = [
      './bower_components/angular-mocks/angular-mocks.js',
      './bower_components/underscore/underscore.js'
   	];

gulp.task('scripts', function(){

    gulp.src(appModules)
        .pipe(concat('pi-settings-angular.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('test', function() {
  return gulp.src('./foobar')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      console.log(err);
      this.emit('end');
    });
});

gulp.task('autotest', function() {
  return gulp.watch(appModules, ['test']);
});

gulp.task('default', ['scripts']);
