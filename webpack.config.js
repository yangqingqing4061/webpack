const path=require('path');//path是node.js内置的package，用来处理路径的。
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },{
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader',
                ] 
            }
            ,{
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader',
                ] 
            }
        ]
    }
}
/*
    path.join([path1][, path2][, ...]) 
        用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是/，Windows系统是\。
    path.resolve([from ...], to) 
        将 to 参数解析为绝对路径。 
*/