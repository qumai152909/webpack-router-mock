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
