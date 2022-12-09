//安装插件 npm i html-webpack-plugin
//引入插件
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                //mjs或者js文件
                test: /\.m?js$/,
                //排除这两个文件夹
                exclude: /(node_modules|bower_components)/,

                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },


    //配置插件
    plugins: [
        new HTMLPlugin({
            // title:'Hello Webpack'
            template: "./src/index.html"
        })
    ],

    //设置代码映射
    devtool: "inline-source-map"
}