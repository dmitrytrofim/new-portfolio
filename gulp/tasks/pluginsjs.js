import uglify from 'gulp-uglify';

export const pluginsjs = () => {
 return app.gulp
  .src(app.path.src.pluginsjs)
  .pipe(app.plugins.if(app.isBuild, uglify()))
  .pipe(app.gulp.dest(app.path.build.pluginsjs));
};
