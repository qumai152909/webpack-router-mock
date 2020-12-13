module.exports = {
  extends: ['eslint-config-airbnb'],
  
  env: { // 指定你想启用的环境
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  
  plugins: [ // 引用第三方插件
    'react',
    'babel',
    'react-hooks',
  ],
  
  globals: {
    FAC: 'readonly',
    Apps: 'readonly',
    $: 'readonly',
    jQuery: 'readonly',
    $CONFIG: 'readonly',
    Highcharts: 'readonly',
    JD: 'readonly',
  },
  
  settings: { // 共享设置
    'import/resolver': {
      alias: {
        map: [
          ['~@', './src'],
          ['~@business', './src/components/business'],
          ['~@ui', './src/components/ui'],
          ['~@redux', './src/redux'],
          ['~@common', './src/common'],
          ['~@views', './src/views']
        ],
        extensions: [".js", ".jsx", ".json"]
      }
    }
  },
  
  parser: 'babel-eslint', // 解析器：在使用es6代码中，需要改成babel-eslint
  
  parserOptions: { // 指定校验的ecma的版本
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {  // 0 - 关闭规则 1 将规则视为一个警告 2 - 将规则视为一个错误 (退出码为1)
    "no-global-assign": ["error", {"exceptions": ["Object"]}],
    'func-names': 0,
    'arrow-parens': 0,
    'prefer-const': 2,            // 不强制 const 还是let
    'prefer-destructuring': [2, {
      "array": false,
      "object": true
    }],
    'comma-dangle': 0,           // 不强制 最后一个 ,
    'class-methods-use-this': 0,  // 不判断对象方法里是否使用了 this
    'consistent-return': 0,       // 允许函数根据代码分支具有不同的return行为
    'consistent-this': 2,       // this 的别名统一使用 that
    'curly': [2, 'all'],          // 语句块不允许省略花括号
    'func-style': ['error', 'declaration', { "allowArrowFunctions": true }], // 只允许使用 function 定义函数
    'multiline-comment-style': ['error', 'starred-block'], // 多行注释
    'no-await-in-loop': 0,        // 循环里的 await
    'no-bitwise': 0,              // 允许位运算
    'no-console': 1,              // 上线的代码里不允许有 console
    'no-empty-function': ['error', { allow: ['arrowFunctions'] }], // 不允许空函数
    'no-nested-ternary': 0,       // 允许三元运算嵌套
    'no-param-reassign': ['error', { props: false }],              // 禁止对参数赋值
    'no-plusplus': 0,             // 允许 ++  -- 运算
    'no-script-url': 0,           //
    'no-throw-literal': 0,
    'no-unused-expressions': ['error', { "allowShortCircuit": true, "allowTernary": true }],
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme', 'fixed'], location: 'anywhere' }],
    'no-multiple-empty-lines': 0, // 允许连续空行
    'no-mixed-operators': 0,
    'no-prototype-builtins': 0, // 禁止操作 Object.prototype
    'object-curly-newline': ['error', {consistent: true}],
    'prefer-arrow-callback': 0, // callback里允许使用普通函数
    'import/no-amd': 0,         // 允许 amd 导入风格
    'import/no-dynamic-require': 0, // 允许使用 require 动态导入
    'import/no-commonjs': 0,    // 允许 commonjs 风格
    'import/namespace': 2,      // 使用import * as xx导入的时候, 检测使用到的xx的属性是否有export
    'import/default': 2,        // 确保 import default 的组件里有 export default
    'import/no-extraneous-dependencies': ['error', { // 只允许导入package.json里依赖的包
      devDependencies: false,
      optionalDependencies: false,
    }],
    'react/no-danger': 0, // 允许使用 dangerouslySetInnerHTML
    'react/no-direct-mutation-state': 2, // 禁止直接修改 state
    'react/no-did-update-set-state': 0,     //
    'react/no-find-dom-node': 2,            // 禁止使用 findDomNode
    'react/no-render-return-value': 2,      // render 必须有返回值
    'react/no-set-state': 0,                // 关闭 尽量用无状态组件
    'react/prefer-es6-class': ['error', 'always'], //
    'react/require-optimization': 1,
    'react/jsx-child-element-spacing': 0,
    'react/jsx-curly-spacing': [2, 'always'], // 属性大括号内的空格
    'react/jsx-equals-spacing': [2, 'never'],
    'react/prefer-stateless-function': 2,
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'], // 多行属性才换行
    'react/jsx-handler-names': 2,
    'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx']}],
    'react/jsx-indent': [2, 2], // jsx缩进2个空格
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,         // 循环元素必须有key
    'react/jsx-no-target-blank': 0,
    'react/jsx-one-expression-per-line': 0, // 关闭 表达式占单行
    'react/jsx-sort-default-props': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-tag-spacing': [0, {
      "closingSlash": "never",
      "beforeSelfClosing": "never",
      "afterOpening": "never",
      "beforeClosing": "allow"
    }],
    
    'max-len': ["error", {
      "code": 120,
      "ignoreUrls": true,  // 忽略包含URL的行
      "ignoreStrings": true,   // 忽略包含双引号或单引号字符串的行
      "ignoreTemplateLiterals": true, // 忽略包含模板文字的行
      "ignoreRegExpLiterals": true //  忽略包含RegExp文字的行
    }],
    'jsx-a11y/anchor-is-valid': 0,  // 锚点必须有效
    'jsx-a11y/click-events-have-key-events': 0,
    'react/forbid-prop-types': ["off", { "forbid": ['any'] }],
    'react-hooks/rules-of-hooks': "error", // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': "warn", // 检查 effect 的依赖
  },
};
