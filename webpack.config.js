const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

// __dirname: 当前文件(webpack.config.js)所在的目录路径；此处是项目根目录
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
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
            name: '[name].[ext]',
          }
        }
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
  }
};

// file-loader可以解决图片在css中的引入路径问题；
// url-loader:当图片较小时，转为base64编码； 默认包括file-loader