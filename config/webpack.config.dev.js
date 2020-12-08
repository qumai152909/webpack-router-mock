const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { rootPath, srcPath, publicPath } = require('./configs');
const imgLoader = require('./img-loader');

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.join(rootPath, 'dist'), // 打包后文件输出目录
    publicPath: '/dist/',
    chunkFilename: `js/[name].chunk.js`
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // css-loader是基本的，加载并解析css文件；style-loader：注入到style标签中；
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: imgLoader,
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: 'file-loader?cacheDirectory',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  optimization: {
    moduleIds: 'hashed',
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10,
        },
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
      '@assets': path.resolve(srcPath, './assets'),
      '@components': path.resolve(srcPath, './components'),
      '@utils': path.resolve(srcPath, './utils')
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
    new MiniCssExtractPlugin({
      filename: `css/[name].css`,
      chunkFilename: `css/[name].css`
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
