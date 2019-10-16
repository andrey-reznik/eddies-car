//Сжатие изображений
module.exports = function () {
    $.gulp.task('img', function () {
        return $.gulp.src($.config.path.watch.img)
            .pipe($.gp.imagemin({
                interlaced: true,
                svgoPlugins: [{ removeViewBox: true }],
                plugins: [
                    $.gp.imageminJpegtran({ // Сжатие JPEG
                        progressive: true
                    }),
                    $.gp.imageminPngquant() // Сжатие PNG
                ]
            })).on('error', $.gp.notify.onError())
            .pipe($.gulp.dest($.config.path.app.img))
    });
};