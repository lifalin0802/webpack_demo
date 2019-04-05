let path = require('path'); 
let HtmlWebpackPlugin = require('html-webpack-plugin');  

module.exports = {
    mode:'development', 
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist') 
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            minify:{
                removeAttributeQuotes:false, 
                collapseWhitespace:false  
            }
        })
    ],
    module:{
        rules:[// css-loader处理@import，style-loader是将css插入head 标签中，loader是希望单一，
            //loader 顺序是从右向左执行，loader还可以写成对象的方式，就是{}
            {
                test:/\.css$/,
                use: [
                    {
                      loader: 'style-loader',
                      options: {
                          insertAt: 'top', //Insert style tag at top of <head>
                          singleton: true, //this is for wrap all your style in just one style tag
                        }
                    },
                    "css-loader"
                  ]
            }
        ]
    }
}

