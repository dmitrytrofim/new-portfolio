export const files = () => {
 return app.gulp
  .src(app.path.src.files, { encoding: false })
  .pipe(app.gulp.dest(app.path.build.files));
};
