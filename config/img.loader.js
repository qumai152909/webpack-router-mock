const isPro = process.env.NODE_ENV === 'production';

module.exports = {
  loader: 'url-loader',
  options: {
    limit: 2,
    name(resourcePath) { // D:\projects-demo-jd\webpack-dev-server-mock\src\assets\images\logo.png
      const imgPathReg = /pages\\(\w+)\\images\\(\w)+.(png|jpg|jpeg|gif)$/;
      const imgInPage = resourcePath.match(imgPathReg);
      let imgName = 'images';
      if (imgInPage !== null && imgInPage[1]) { // page内的图片，输入路径：images/pageName
        imgName = imgName + '/' + imgInPage[1];
      }
      if (isPro) {
        return `${imgName}/[name].[hash:8].[ext]`;
      }
      return `${imgName}/[name].[ext]`;
    }
  }
};
