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

## 4. .npmrc
   大家一开始使用 npm 安装依赖包时，肯定感受过那挤牙膏般的下载速度，上网一查只需要将 npm 源设置为淘宝镜像源就行，在控制台执行一下以下命令：
   npm config set registry https://registry.npm.taobao.org
   复制代码
   从此过上了速度七十迈，心情是自由自在的生活。
   但是大家想想，万一某个同学克隆了你的项目之后，准备在他本地开发的时候，并没有设置淘宝镜像源，又要人家去手动设置一遍，我们作为项目的发起者，就先给别人省下这份时间吧，只需要在根目录添加一个 .npmrc 并做简单的配置即可：
   ### 创建 .npmrc 文件
   touch .npmrc
   ### 在该文件内输入配置
   registry=https://registry.npm.taobao.org/
   
## 2. Prettier
如果说 EditorConfig 帮你统一编辑器风格，那 Prettier 就是帮你统一项目代码风格（code style）的。
Prettier 拥有更多配置项（实际上也不多，数了下二十个），且能在发布流程中执行命令自动格式化，能够有效的使项目代码风格趋于统一。


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
