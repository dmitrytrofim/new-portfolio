import fileinclude from 'gulp-file-include';
import replace from 'gulp-replace';
import strip from 'gulp-strip-comments';

export const html = () => {
 return app.gulp
  .src(app.path.src.html)
  .pipe(fileinclude())
  .pipe(replace('/src/', './'))
  .pipe(
   app.plugins.if(
    app.isBuild,
    replace('style.min.css', `style.min.css?v=${Date.now()}`)
   )
  )
  .pipe(
   app.plugins.if(
    app.isBuild,
    replace('app.min.js', `app.min.js?v=${Date.now()}`)
   )
  )
  .pipe(app.plugins.if(app.isBuild, strip()))
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugins.browsersync.stream());
};