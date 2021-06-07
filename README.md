# 文件结构

## public/
静态资源，该目录下的文件不会被webpack处理，仅仅是拷贝；
例如：favicon.ico，一般放在此文件夹下；
一般包含 HTML 文件;
如果你希望你的文件不被编译，比如jquery.min.js，或者压缩好的js插件等，你就可以把文件放在public文件夹中，这样还可以减少文件构建时间，可以减少构建文件的大小。

## config/
存放的是项目的配置文件

## mock/
本地模拟数据
mock/app.js mock server入口

## src/
项目的源代码（业务代码）
也就是会包含所有会被 Webpack 打包并最终发送到浏览端的代码。

## src/assets/
存放静态资源

## src/routes/
前端路由配置页
包含项目中每个路由的定义；

## src/components/
业务通用组件
这里放的都是公共部分的组件

## src/views/
业务页面入口和常用模板

## src/services/
后台接口服务

## src/utils/
工具库

## src/locales/
国际化资源

# 代码分割 - code splitting
+ Lazy loading on the route level


~~~ js
 optimization: {
    moduleIds: 'hashed',
    splitChunks: {
      cacheGroups: {
        react: { // 项目基本框架，react等
          name: 'react-all', // can be used in chunks array of HtmlWebpackPlugin
          test: /(react|react-dom|react-router|react-router-dom)/,
          chunks: 'all',
          priority: 10,
        },
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 9,
        },
      }
    },
  },
~~~

## router
https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md#configuring-your-server

## github demo projects
https://github.com/flatlogic/react-dashboard
https://github.com/now1then/react-web-pro //  webpack react react-router axios ant-design mobx

## 问题
1，Syntax error - Support for the experimental syntax 'decorators-legacy' isn't currently enabled
解决地址：https://babel.docschina.org/docs/en/next/babel-plugin-proposal-decorators/
原因：不支持装饰器语法
解决方式：安装包@babel/plugin-proposal-decorators，并配置babel；

2, Support for the experimental syntax 'classProperties' isn't currently enabled

原因：当我们使用了一些JavaScript的一些新特性的时候，但是有没有在webpack.config.js里面或者是.babelrc文件中配置相关插件，就可以解决了。

官网地址：https://babel.docschina.org/docs/en/babel-plugin-proposal-class-properties/

3, internal/modules/cjs/loader.js:883
     throw err
