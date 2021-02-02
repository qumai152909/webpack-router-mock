const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { rootDir, srcDir, publicDir } = require('./configs');
const imgLoader = require('./img.loader.js');

let config = {
  mode: 'development',
  devtool: 'inline-cheap-module-eval-source-map',
  entry: {
    main: './src/main.jsx',
  },
  output: {
    filename: 'js/[name].js',
    path: path.join(rootDir, 'dist'), // 打包后文件输出目录
    publicPath: '/dist/',
    chunkFilename: `js/[name].js`
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: imgLoader,
        include: [srcDir],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: 'file-loader?cacheDirectory',
          options: {
            name: 'fonts/[name].[ext]'
          }
        },
        include: [srcDir],
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    moduleIds: 'named', // moduleIds: 'hashed',
    chunkIds: 'named',
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        dll: {
          test: /[\\/]node_modules[\\/](babel-polyfill|history|lodash|react|react-dom|react-router|mobx|mobx-react|mobx-react-dom)/,
          minChunks: 1,
          chunks: 'all',
          priority: 10,
          name: 'dll',
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 1,
          chunks: 'all',
          priority: 9,
          name: 'vendors', // can be used in chunks array of HtmlWebpackPlugin
        },
      }
    },
  },
  resolve: { // 在何处、如何查找文件
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [
      srcDir,
      path.resolve(rootDir, 'node_modules'),
    ],
    alias: {
      '@/assets': path.resolve(srcDir, './assets'),
      '@/components': path.resolve(srcDir, './components'),
      '@/utils': path.resolve(srcDir, './utils'),
      '@/styles': path.resolve(srcDir, './styles'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(publicDir, 'index.html'),
      favicon: path.join(publicDir, 'favicon.ico'),
      filename: 'index.html',
      path: '/dist/'
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name].css`,
      chunkFilename: `css/[name].css`
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8120, // 默认8080
    historyApiFallback: { index: '/dist/index.html' },
    hot: true,
    open: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:8121',
      },
      {
        context: ['/www'],
        target: `http://11.80.15.91`, // /api/users 的请求会将请求代理到 http://11.80.15.91/api/users
        secure: false,
        changeOrigin: true
      }
    ],
  }
};

const isAnalyze = process.env.Analyze === 'true';
if (isAnalyze) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
// file-loader可以解决图片在css中的引入路径问题；
// url-loader:当图片较小时，转为base64编码； 默认包括file-loader

// historyApiFallback 当路径匹配的文件不存在时不出现404,而是取配置的选项historyApiFallback.index对应的文件
