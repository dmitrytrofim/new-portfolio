// Основной модуль
import gulp from 'gulp';
// Импорт путей
import { path } from './gulp/config/path.js';
// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

// Передаем значения в глобальную переменную
global.app = {
 isBuild: process.argv.includes('--build'),
 isDev: !process.argv.includes('--build'),
 path: path,
 gulp: gulp,
 plugins: plugins,
};

// Импорт задач
import { files } from './gulp/tasks/files.js';
import { fonts } from './gulp/tasks/fonts.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { pcss } from './gulp/tasks/postcss.js';
import { js } from './gulp/tasks/js.js';
import { pluginsjs } from './gulp/tasks/pluginsjs.js';
import { images } from './gulp/tasks/images.js';
import { svgSprive } from './gulp/tasks/svgSprive.js';
import { deltxt } from './gulp/tasks/deltxt.js';

// Наблюдатель за изменениями в файлах
function watcher() {
 gulp.watch(path.watch.html, html);
 gulp.watch(path.watch.scss, scss);
 gulp.watch(path.watch.pcss, pcss);
 // gulp.watch(path.watch.pluginsjs, pluginsjs);
 gulp.watch(path.watch.js, js);
 gulp.watch(path.watch.images, images);
 gulp.watch(path.watch.svgsprite, svgSprive);
 gulp.watch(path.watch.files, files);
}

// Основные задачи
const mainTasksDev = gulp.parallel(
 fonts,
 html,
 scss,
 pluginsjs,
 js,
 images,
 svgSprive,
 files
);
const mainTasksBuild = gulp.parallel(
 fonts,
 html,
 gulp.series(scss, pcss),
 pluginsjs,
 gulp.series(js, deltxt),
 images,
 svgSprive,
 files
);

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasksDev, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasksBuild);

// Экспорт сценариев
export { dev };
export { build };

// Выполнение сценария по умолчанию
gulp.task('default', dev);
