//Сборка SASS в CSS
module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src($.config.path.watch.sass.src)
            .pipe($.gp.if($.config.release, $.gp.sourcemaps.init()))            // Инициализация source-maps
            .pipe($.gp.sass({
                    includePaths: ['node_modules/']
                }).on('error', $.gp.notify.onError()))                          // Сборка SASS в CSS + включение уведомлений в системном трее при ошибке
            .pipe($.gp.autoprefixer($.config.autoPrefixer))                     // Добавление CSS свойствам префиксов для браузеров
            .pipe($.gp.groupCssMediaQueries())                                  // Группировка медиа запросов в CSS
            .pipe($.gp.if($.config.release, $.gp.cleanCss()))                   // Минификация CSS
            .pipe($.gp.if($.config.release, $.gp.rename({suffix: '.min'})))     // Переименовывание CSS файла
            .pipe($.gp.sourcemaps.write('/'))                                   // Запись source-map
            .pipe($.gulp.dest($.config.path.app.css))                           // Перемещение CSS в папку для CSS
            .pipe($.gp.browserSync.reload({stream: true}));                     // Обновление браузера
    });
};