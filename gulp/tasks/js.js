import webpack from 'webpack-stream';
import strip from 'gulp-strip-comments';

export const js = () => {
 return app.gulp
  .src(app.path.src.js, { sourcemaps: app.isDev })
  .pipe(
   webpack({
    mode: app.isBuild ? 'production' : 'development',
    output: {
     filename: 'app.min.js',
    },
    resolve: {
     alias: {
      jquery: 'jquery/src/jquery',
     },
    },
    performance: {
     hints: false,
    },
   })
  )
  .pipe(app.plugins.if(app.isBuild, strip()))
  .pipe(app.gulp.dest(app.path.build.js))
  .pipe(app.plugins.browsersync.stream());
};
