const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

// __dirname: 当前文件(webpack.config.js)所在的目录路径；此处是项目根目录
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'js/chunk.js',
    path: path.join(__dirname, 'dist'), // 打包后文件输出目录
    publicPath: '/dist/',
    chunkFilename: `js/[name].chunk.js`
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
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: { // 在何处、如何查找文件
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Webpack-dev-server App",
      inject: "true",
      template: './src/index.html',
      filename: 'index.html',
      path: '/dist/'
    })
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