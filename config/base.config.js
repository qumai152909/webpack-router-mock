const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { rootDir, srcDir, publicDir } = require('./configs');
const imgLoader = require('./img.loader.js');

let config = {
  entry: path.join(__dirname, "src", "main.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

const isAnalyze = process.env.Analyze === 'true';
if (isAnalyze) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
