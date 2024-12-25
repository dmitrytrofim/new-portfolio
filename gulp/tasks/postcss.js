import postcss from 'gulp-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import sortMediaQueries from 'postcss-sort-media-queries';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';

export const pcss = () => {
 return app.gulp
  .src(app.path.src.pcss)
  .pipe(
   postcss([
    postcssPresetEnv({
     autoprefixer: { flexbox: false },
     browsers: 'last 2 versions',
    }),
    sortMediaQueries(),
   ])
  )
  .pipe(cleanCSS())
  .pipe(
   rename({
    extname: '.min.css',
   })
  )
  .pipe(app.gulp.dest(app.path.build.css));
};
