import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import replace from 'gulp-replace';

const sass = gulpSass(dartSass);

export const scss = () => {
 return app.gulp
  .src(app.path.src.scss, { sourcemaps: app.isDev })
  .pipe(
   sass({
    outputStyle: 'expanded',
    silenceDeprecations: ['legacy-js-api'],
   })
  )
  .pipe(replace('/src/', '../'))
  .pipe(
   app.plugins.if(
    app.isDev,
    rename({
     extname: '.min.css',
    })
   )
  )
  .pipe(app.plugins.if(app.isDev, app.gulp.dest(app.path.build.css)))
  .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.pcss)))
  .pipe(app.plugins.if(app.isDev, app.plugins.browsersync.stream()));
};
