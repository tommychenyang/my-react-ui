var path=require('path');
var webpack =require('webpack');
var HtmlWebpackPlugin= require('html-webpack-plugin');
// var config=require('./config');
module.exports = {
    context: path.join(__dirname, '../'),
    devtool:'eval-source-map',
    entry: './index.js',
    output: {
        path: path.join(__dirname,'../dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test:  /\.(js|jsx)$/,
            loader: 'babel-loader',
            options: {
              // @remove-on-eject-begin
              babelrc: true,
              presets: ['es2015', 'react','stage-2'], 
              // @remove-on-eject-end
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
            },
            exclude: /node_modules/
        },
        // {
        //     test: [/\.js$/,/\.vue$/],
        //     loader: 'eslint-loader',
        //     exclude: /node_modules/
        // },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', {loader: 'postcss-loader',
                options:{
                     config: {
                        path: path.join(__dirname, './postcss.config.js')
                    }
                }
            }]
        },
        {
            // edit this for additional asset file types
            test: /\.(png|jpg|gif)$/,
            loader: 'file?name=[name].[ext]?[hash]'
        }]
    },
    // devServer: {
    //     proxy: {
    //         '*': {
    //             target:'http://localhost:'+(config.dev.port-1),
    //             secure:false
    //         }
    //     }
    // },

       // resolve: {
       //  alias: {
       //    react: path.join(__dirname, 'node_modules', 'react'),
       //  }
       //        },  
      plugins: [
    // new webpack.DefinePlugin({
    //     VUE_VERSION: JSON.stringify(require('./node_modules/vue/package.json').version)
    // }),
        new HtmlWebpackPlugin({
            template:'./src/template/index.html',
            inject: 'body',
            filename: '../index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
]
}