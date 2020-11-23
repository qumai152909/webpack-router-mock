const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { rootPath, srcPath, publicPath } = require('./configs');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.join(rootPath, 'dist'), // 打包后文件输出目录
    publicPath: '/dist/',
    chunkFilename: `js/[name].js`
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/, // css-loader是基本的，加载并解析css文件；style-loader：注入到style标签中；
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 3000,
            name: 'images/[name].[ext]',
          }
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  optimization: {
    moduleIds: 'hashed',
    splitChunks: {
      cacheGroups: {
        react: { // 项目基本框架，react等
          name: 'react-all', // can be used in chunks array of HtmlWebpackPlugin
          test: /(react|react-dom|prop-types|history|react-router|react-router-dom)/, // test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10,
        },
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 9,
        },
        common: { // 其他同步加载业务代码公共包
          name: 'common',
          test: /[\\/]src[\\/]/,
          chunks: 'all',
          minSize: 0,
          minChunks: 2,
        }
      }
    },
  },
  resolve: { // 在何处、如何查找文件
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [
      srcPath,
      path.resolve(rootPath, 'node_modules'),
    ],
    alias: {
      '@assets': path.resolve(rootPath, './assets')
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "true",
      template: path.join(publicPath, 'index.html'),
      favicon: path.join(publicPath, 'favicon.ico'),
      filename: 'index.html',
      path: '/dist/'
    }),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    host: 'localhost', // 默认localhost
    port: 8188, // 默认8080
    historyApiFallback: { index: '/dist/index.html' }
  }
};

// file-loader可以解决图片在css中的引入路径问题；
// url-loader:当图片较小时，转为base64编码； 默认包括file-loader

// historyApiFallback 当路径匹配的文件不存在时不出现404,而是取配置的选项historyApiFallback.index对应的文件
