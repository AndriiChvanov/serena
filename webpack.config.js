const path = require('path');

module.exports = {
    // Итак,  чтобы вебпак начал свою работу, нужно указать главный (основной) файл, который будет включать в себя все другие необходимые файлы (модули).
    entry: {
        polyfill: 'babel-polyfill',
        main: './js/main.js',
    },
    // Также webpack рекомендует явно указывать, в какой директории находятся исходные файлы проекта (ресурсы). Для этого следует использовать свойство context:
    context: path.resolve(__dirname, 'src'),
    module: {
        // Для того, чтобы трансформировать файл, используются специальные утилиты - загрузчики (loaders).
        //Для любых настроек модуля вебпак используется поле module.
        //Массив rules  внутри объекта module определяет список правил для загрузчиков.
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
                test: /\.js$/,
            },

        ],
    },

    // Кроме entry, мы можем указать поле, куда (в какой файл) собирать конечный результат. Это свойство задаётся с помощью поля output.
    //По умолчанию, весь результирующий код собирается в папку dist.
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    mode: 'development',
};