var gulp     = require('gulp');
var nodeunit = require('gulp-nodeunit');

var src = {
  test: './test/**/*.js',
  lib: './lib/**/*.js'
};

gulp.task('test', function () {
  gulp.src(src.test)
    .pipe(nodeunit({ reporter: 'minimal' }));
});

gulp.task('default', ['test'], function () {
  gulp.watch([src.test, src.lib], ['test']);
});