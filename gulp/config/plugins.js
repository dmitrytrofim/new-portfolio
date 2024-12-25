import browsersync from 'browser-sync'; // Локальный сервер
import ifPlugin from 'gulp-if'; // Условное ветвление

// Экспортируем объект
export const plugins = {
 browsersync: browsersync,
 if: ifPlugin,
};
