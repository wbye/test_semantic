var gulp = require('gulp');
var watch = require('./bower_components/semantic/tasks/watch');
var build = require('./bower_components/semantic/tasks/build');

gulp.task('watch-ui',watch);
gulp.task('build-ui',build);

