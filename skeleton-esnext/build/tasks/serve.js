var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('runNode', function(cb) {
    let started = false;

    return nodemon.default({
        script: 'server/app.js'
    }).on('start', function() {
        if (!started) {
            cb();
            started = true;
        }
    });
}

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build','runNode'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    proxy: 'http://localhost:3000',
    // server: {
    //   baseDir: ['.'],
    //   middleware: function(req, res, next) {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     next();
    //   }
    // }
  }, done);
});

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve-bundle', ['bundle','runNode'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    proxy: 'http://localhost:3000',
    // server: {
    //   baseDir: ['.'],
    //   middleware: function(req, res, next) {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     next();
    //   }
    // }
  }, done);
});

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve-export', ['export','runNode'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    proxy: 'http://localhost:3000',
    // server: {
    //   baseDir: ['./export'],
    //   middleware: function(req, res, next) {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     next();
    //   }
    // }
  }, done);
});
