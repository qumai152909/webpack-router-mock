const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { rootDir, srcDir, publicDir } = require('./configs');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: './src/main.js',
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.join(rootDir, 'dist'), // 打包后文件输出目录
    publicPath: '/dist/',
    chunkFilename: `js/[name].[contenthash].js`
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
            name: 'images/[name].[contenthash].[ext]',
          }
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: {
      name: 'manifest', // 将runtime代码提取到一个单独的文件中
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors', // can be used in chunks array of HtmlWebpackPlugin
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10,
        },
        common: {
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
      srcDir,
      path.resolve(rootDir, 'node_modules'),
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "true",
      template: path.join(publicDir, 'index.html'),
      favicon: path.join(publicDir, 'favicon.ico'),
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
