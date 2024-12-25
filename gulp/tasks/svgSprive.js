import svgSprite from 'gulp-svg-sprite';

export const svgSprive = () => {
 return app.gulp
  .src(`${app.path.src.svgsprite}`, { encoding: false })
  .pipe(
   svgSprite({
    mode: {
     stack: {
      sprite: `../sprite.svg`,
     },
    },
   })
  )
  .pipe(app.gulp.dest(`${app.path.build.svg}`));
};
