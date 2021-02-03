const path = require('path');
const fs = require('fs');

// __dirname: 当前文件(webpack.config.js)所在的目录路径；此处是config目录

const rootDir = path.resolve(__dirname, '../'); // 项目根目录
const srcDir = path.resolve(__dirname, '../src');
const publicDir = path.resolve(__dirname, '../public');
const distDir = path.resolve(__dirname, '../dist');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
  rootDir,
  srcDir,
  publicDir,
  distDir,
  resolveAppPath
};
