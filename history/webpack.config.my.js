let path = require('path'); //可以解析代码的模块，此处相当于导入
console.log(path.resolve('dist'));  // 也可以 path.resolve(__dirname,'dist')
let HtmlWebpackPlugin = require('html-webpack-plugin');  //插件，yarn add html-webpack-plugin

module.exports = {
    devServer:{   // 设置开发服务器的配置
        port:3000, //自定义访问的端口号
        progress:true,
        contentBase:'./dist',  //指定运行目录,即指向build目录,
        compress:true
    },
    mode:'development', // 模式，作用于output中的filename,ji 一共有两种，development, 和production
    entry:'./src/index.js', //被打包的文件
    output:{
        filename:'bundle.[hash:8].js',//打包后的文件名
        path:path.resolve(__dirname,'dist') //路径必须是个绝对路径
    },
    plugins:[//数组，放着所有的webpack插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            minify:{
                removeAttributeQuotes:true, // 决定template 是否有双引号
                collapseWhitespace:true  //是否是一行
            },
            hash:true  //是否带有hash 
        })
    ]
}

