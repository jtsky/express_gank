/**
 * Created by Administrator on 2015/11/26.
 */
'use strict'
var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项 提取公共部分
    //plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        main: ['./javascripts/component/jsx/Gallery.js', './stylesheets/scss/flex_grid.scss'],
    }
    ,
    //入口文件输出配置
    output: {
        path: __dirname + '/common/',
        filename: '[name].bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            {test: /\.js$/, loader: 'jsx?harmony'},
            //.css 文件使用 style-loader 和 css-loader 来处理
            {test: /\.css$/, loader: 'style!css'},
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
        ]
    },
    //其它解决方案配置
    resolve: {
        //root: 'E:/NodeProject/express_gank/public', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        /*alias: {
         AppStore: 'js/stores/AppStores.js',
         ActionType: 'js/actions/ActionType.js',
         AppAction: 'js/actions/AppAction.js'
         }*/
    }
};