module.exports = {
  extends: ['eslint-config-airbnb'], // 规则继承
  
  env: { // 指定环境, 指定环境为我们提供了其预置的全局变量
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
          ['@/pages', './src/pages'],
          ['@/assets', './src/assets'],
          ['@/components', './components'],
          ['@/utils', './utils'],
          ['@/styles', './styles']
        ],
        extensions: [".js", ".jsx", ".json"]
      }
    }
  },
  
  parser: 'babel-eslint', // 解析器：在使用es6代码中，需要改成babel-eslint
  
  parserOptions: { // parser 解析代码时的参数
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 规则格式是<插件名称>/<规则名称>: <告警级别>
  // https://cn.eslint.org/docs/rules/
  rules: {  // 0 - 关闭规则 1 开启规则，使用警告级别的错误 2 - 开启规则，使用错误级别的错误（error）
    "no-global-assign": [2, {"exceptions": ["Object"]}], // 禁止对原生对象或只读的全局对象进行赋值
    'func-names': 0, // 使用命名的 function 表达式
    'arrow-parens': 0, // 要求箭头函数的参数使用圆括号
    'prefer-const': 2, // 建议使用const；不强制 const 还是let
    'prefer-destructuring': [2, {
      "array": false,
      "object": true
    }], // 优先使用解构而不是通过成员表达式访问属性
    'comma-dangle': 0,           // 不强制 最后一个 ,  ； 末尾逗号
    'class-methods-use-this': 0,  // 不判断对象方法里是否使用了 this
    'consistent-return': 0,       // 允许函数根据代码分支具有不同的return行为
    'consistent-this': 2,       // this 有多个常用的别名，这里this 的别名统一使用默认的 that
    'curly': [2, 'all'],          // 语句块不允许省略花括号
    'func-style': ['error', 'declaration', { "allowArrowFunctions": true }], // 只允许使用 function 定义函数
    'multiline-comment-style': ['error', 'starred-block'], // 强制对多行注释使用特定风格 https://cn.eslint.org/docs/rules/multiline-comment-style
    'no-await-in-loop': 0,        // 2=禁止在循环中出现 await
    'no-bitwise': 0,              // 允许位运算
    'no-console': 1,              // 上线的代码里不允许有 console
    'no-empty-function': ['error', { allow: ['arrowFunctions'] }], // 不允许空函数
    'no-nested-ternary': 0,       // 允许三元运算嵌套
    'no-param-reassign': ['error', { props: false }], // 禁止对参数赋值
    'no-plusplus': 0,             // 允许 ++  -- 运算
    'no-script-url': 0,           // 2=禁止使用 javascript: url
    'no-throw-literal': 0, // 禁止抛出异常字面量
    'no-unused-expressions': ['error', { "allowShortCircuit": true, "allowTernary": true }], // 禁止出现未使用过的表达式
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme', 'fixed'], location: 'anywhere' }], // 禁止在注释中使用特定的警告术语
    'no-multiple-empty-lines': 0, // 允许连续空行
    'no-mixed-operators': 0, // 允许混合使用不同的操作符
    'no-prototype-builtins': 0, // 禁止操作 Object.prototype
    'object-curly-newline': ['error', {consistent: true}], // 在花括号内使用一致的换行符
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
    'react/no-did-update-set-state': 0,     // 2=防止在componentDidUpdate中使用setState
    'react/no-find-dom-node': 2,            // 禁止使用 findDomNode
    'react/no-render-return-value': 2,      // render 必须有返回值
    'react/no-set-state': 0,                // 关闭 尽量用无状态组件
    'react/prefer-es6-class': ['error', 'always'], //  //为React组件强制执行ES5或ES6类
    'react/require-optimization': 1, // 强制 Class 组件必须实现 shouldComponentUpdate 方法
    'react/jsx-child-element-spacing': 0, // 2=不允许 JSX 中将空格定义在花括号内
    'react/jsx-curly-spacing': [2, 'always'], // 2=强制 JSX 中的花括号内有空格
    'react/jsx-equals-spacing': [2, 'never'], // 在JSX属性中强制或禁止等号周围的空格
    'react/prefer-stateless-function': 2, // 强制无状态组件写成纯函数
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'], // 多行属性才换行
    'react/jsx-handler-names': 2, // 强制事件处理函数的命名约定（默认属性以 on 为前缀，处理函数以 handle 为前缀）
    'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx']}], // 限制包含 JSX 的文件扩展名
    'react/jsx-indent': [2, 2], // jsx缩进2个空格
    'react/jsx-indent-props': [2, 2], // 验证 JSX props 缩进
    'react/jsx-key': 2,         // 循环元素必须有key
    'react/jsx-no-target-blank': 0, //2=禁止使用不安全的 target='_blank' 属性
    'react/jsx-one-expression-per-line': 0, // 关闭 表达式占单行；一行只有一个表达式
    'react/jsx-sort-default-props': 0, //  2=强制 defaultProps 按字母表顺序排序
    'react/jsx-sort-props': 0, // 2=制组件的 props 属性按字母表顺序排序
    'react/jsx-tag-spacing': [0, { // 验证 JSX 中标签内和周围的空格
      "closingSlash": "never", // 闭合处禁止有空格
      "beforeSelfClosing": "always", // 正确写法：<Hello />
      "afterOpening": "never", // 就使用never
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
