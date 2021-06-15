const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { rootDir, srcDir, publicDir } = require('./configs');
const baseConfig = require('./webpack.config.base');


const prodConfig = {
  mode: 'production',
  output: {
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].chunk.[chunkhash:8].js'
  },
};

module.exports = merge(baseConfig, prodConfig);

