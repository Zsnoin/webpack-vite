module.exports = {
    mode: 'production',
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
    }
}