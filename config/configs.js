const path = require('path');

// __dirname: 当前文件(webpack.config.js)所在的目录路径；此处是config目录

const rootDir = path.resolve(__dirname, '../'); // 项目根目录
const srcDir = path.resolve(__dirname, '../src');
const publicDir = path.resolve(__dirname, '../public');
const distDir = path.resolve(__dirname, '../dist');

module.exports = {
  rootDir,
  srcDir,
  publicDir,
  distDir,
};
