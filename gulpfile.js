// Gulp init and plugin load

const gulp = require('gulp');
const gutil = require("gulp-util");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

// Gulp tasks
gulp.task('default', ['watch']);
gulp.task('build', function(callback) {
    // run webpack
    webpack(require('./webpack.config.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});
gulp.task('watch', function(callback) {
    var compiler = webpack(require('./webpack.config.js'));
    //TODO
});
