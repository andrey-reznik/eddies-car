//Сборка PUG в HTML
module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src($.config.path.watch.pug.pages)
            .pipe($.gp.pug({
                pretty: true,
                locals: {
                    $: JSON.parse($.fs.readFileSync($.config.path.pug.data, 'utf-8')),  // Чтение файла навигации
                    release: $.config.release,                                          // Релиз или разработка
                    _: $.gp.jsonpath                                                       // Библиотека для работы с JSON объектами
                }
            }).on('error', $.gp.notify.onError()))
            .pipe($.gulp.dest($.config.path.app.html))                                  // Помещение собранных HTML файлов в папку app
            .on('end', $.gp.browserSync.reload);                                        // Обновление браузера после завершения таска
    });
};