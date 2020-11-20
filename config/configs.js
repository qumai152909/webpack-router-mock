const path = require('path');

// __dirname: 当前文件(webpack.config.js)所在的目录路径；此处是config目录

const rootPath = path.resolve(__dirname, '../'); // 项目根目录
const srcPath = path.resolve(__dirname, '../', 'src');

module.exports = {
  rootPath,
  srcPath
};