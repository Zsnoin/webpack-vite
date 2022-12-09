const path = require('path')
module.exports = {
    mode: 'production',          //设置打包的模式,production表示生产模式  development 开发模式
    // entry: './hello/hello.js',   //用来指定打包时的主文件 默认./src/index.js
    // entry:['./src/a.js','./src/b.js'],
    // entry:{
    //     a_hello:'./src/a.js',
    //     b:'./src/b.js'
    // },
    // entry:'./src/a.js',

    // 配置打包后的地址
    output: {
        path: path.resolve(__dirname, 'dist'),   //指定打包的目录，必须要用绝对路径
        // filename:'main.js', //配置打包后的文件名
        // filename:"[name]-[hash].js",
        // clean:true,   //自动清理打包目录
    },

    /* 
    默认情况下只会处理js文件，如果我们需要处理其他文件，需要手动引入
        - 以css为例
        安装 npm i css-loader -D
    */
    module: {
        rules: [
            {
                test: /\.css$/i,
                // css-loader 导入css的loader     style-loader处理css的loader
                use: ['style-loader', 'css-loader'],
            },
            
            //图片的loader默认存在，只需要配置即可
            //可以通过指定type处理，不需要安装其他loader
            {
                test:/\.(jpg|png|gif)$/,
                type:'asset/resource',
            }
        ]
    },


}