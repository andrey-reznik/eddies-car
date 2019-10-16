//Удаление папки со сборкой
module.exports = function () {
    $.gulp.task('args', function () {
        return new Promise(function (resolve, reject) {
            $.gp.yargs.argv.release ? $.config.release = true : null
            console.log($.config.release);
            resolve();
        });
    });
};