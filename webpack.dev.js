/**
 * webpack 开发环境配置
 **/
var path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
console.log(path.join(__dirname, 'public'))
 module.exports = {
  // 项目入口文件
  entry: {
    app: path.join(__dirname, 'app', 'app.js'),
    // 提取第三方库
    vendor: ['react', 'react-dom', 'react-router-dom', 'react-redux', 'redux']
  },
  // 打包文件存储位置
  output: {
    // 输出不同文件名 处理浏览器缓存问题
    // 1： 如果是开发环境，将配置文件中的chunkhash 替换为hash
    // 2：如果是生产环境，不要使用参数 --hot
    path: path.join(__dirname, 'public'),
    filename:  '[name].[hash:8].js'
  },
  // 映射 （方便调试）
  devtool: 'source-map',
  // 定义解析
  resolve: {
    alias: {
      Image: path.resolve(__dirname, 'assets/images'),
      Css: path.resolve(__dirname, 'assets/css'),
      Video: path.resolve(__dirname, 'assets/video'),
      Font: path.resolve(__dirname, 'assets/fonts'),
      File: path.resolve(__dirname, 'assets/files')
    },
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  target: 'web',
  // 构建本地服务器
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  // 定义加载器（不使用.balelrc）
  module: {
    rules: [
      // es6 + react
      {	
        test:  /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest', 'react']
          }
        },
        // 使用绝对路径（相对路径对不同的环境会认不出）
        exclude: path.join(__dirname, 'node_modules')
      },
      // let use import or url() to deal with css 
      {
        test: /\.css$/,
        //  提取css, CSS bundle 会跟 JS bundle 并行加载
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              module: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|ico|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[hash:8].[name].[ext]'
          }
        }
      },
      {
        test: /\.(mp4)$/,
        use: {
          loader: 'file-loader',
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader:'file-loader',
          options: {
            name: 'fonts/[hash:8].[name].[ext]'
          }
        }
      },
      {
        test: /\.(dmg|exe|apk)/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'files/[name].[ext]'
          }
        }
      }
    ]
  },
  // 使用插件
  plugins: [
    // 删除缓存插件
    new CleanWebpackPlugin(['public']),
    new webpack.HashedModuleIdsPlugin(),
    // 生成HTML插件
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'assets', 'index.html')
    }),
    // 提取css插件（不再包含在bundle中）
    // new ExtractTextPlugin({
    //   filename: "styles.[contenthash:8].css"
    // }),
    // 热替换插件
    // 如果是生产环境  注释HotModule outPut才能使用 chunkhash
    new webpack.HotModuleReplacementPlugin(),
    // 提取公共模块插件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
 }