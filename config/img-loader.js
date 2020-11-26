const isDev = process.env.NODE_ENV === 'development';

console.log('*************************syy***************');
console.log(isDev);
console.log('*************************syy***************');

module.exports = {
  loader: 'url-loader',
  options: {
    limit: 2,
    name(resourcePath) { // D:\projects-demo-jd\webpack-dev-server-mock\src\assets\images\logo.png
      const imgPathReg = /views\\(\w+)\\images\\(\w)+.(png|jpg|jpeg|gif)$/;
      const imgInPage = resourcePath.match(imgPathReg);
      let imgName = 'images';
      if (imgInPage !== null && imgInPage[1]) { // page内的图片，输入路径：images/pageName
        imgName = imgName + '/' + imgInPage[1];
      }
      if (isDev) {
        return `${imgName}/[name].[ext]`;
      }
      return `${imgName}/[name].[hash:8].[ext]`;
    }
  }
};