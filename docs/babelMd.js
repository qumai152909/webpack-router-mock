// 1， babel.config.js配置文件
module.exports = {
  presets: [
    "@babel/preset-env",
    '@babel/preset-react'
  ],
  plugins: [
    "@babel/transform-runtime",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    [
      "import", // 必须有；否则加载antd的全部组件
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css" // `style: true` 会加载 less 文件
      }
    ]
  ]
};

// 2， babel.config.json配置文件 (推荐)
const json = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage"
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/transform-runtime",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css"
      }
    ]
  ]
};
// @babel/plugin-syntax-dynamic-import： 支持动态导入的插件,使代码中能够使用import()动态引入文件
// @babel/plugin-proposal-decorators: 支持装饰器的使用
// @babel/plugin-proposal-class-properties： 和上面插件的顺序必须一前一后。 "loose": true // babel编译时，对class的属性采用赋值表达式来定义，而不是Object.defineProperty（更简洁）
//babel-plugin-import : 可以针对 antd, antd-mobile, lodash, material-ui等库进行按需加载.

//https://vincef0ng.cn/post/es6-env/#%E4%BD%BF%E7%94%A8-postcss-loader
