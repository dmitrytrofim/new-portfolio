// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = rootFolder;
// const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
 build: {
  js: `${buildFolder}/js/`,
  pluginsjs: `${buildFolder}/js/pluginsjs/`,
  css: `${buildFolder}/css/`,
  pcss: `${srcFolder}/scss/postcss`,
  html: `${buildFolder}/`,
  files: `${buildFolder}/files/`,
  images: `${buildFolder}/img/`,
  svg: `${buildFolder}/img/svg/`,
  fonts: `${buildFolder}/fonts/`,
 },
 src: {
  js: `${srcFolder}/js/app.js`,
  pluginsjs: `${srcFolder}/js/pluginsjs/**/*.*`,
  images: [`${srcFolder}/img/**/*.{jpg,jpeg,png,webp,gif,ico,svg}`],
  scss: `${srcFolder}/scss/style.scss`,
  pcss: `${srcFolder}/scss/postcss/style.css`,
  html: [`${srcFolder}/**/*.html`, `!${srcFolder}/**/_*.html`],
  files: `${srcFolder}/files/**/*.*`,
  fonts: `${srcFolder}/fonts/**/*.*`,
  svgsprite: `${srcFolder}/icons/*.svg`,
 },
 watch: {
  pluginsjs: `${srcFolder}/js/pluginsjs/**/*.*`,
  js: `${srcFolder}/js/**/*.js`,
  scss: `${srcFolder}/scss/**/*.scss`,
  pcss: `${srcFolder}/scss/postcss/style.css`,
  html: `${srcFolder}/**/*.html`,
  files: `${srcFolder}/files/**/*.*`,
  svgsprite: `${srcFolder}/icons/*.svg`,
  images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
  sourceImages: `${srcFolder}/img/source/*`,
 },
 clean: buildFolder,
 buildFolder: buildFolder,
 srcFolder: srcFolder,
 rootFolder: rootFolder,
};
