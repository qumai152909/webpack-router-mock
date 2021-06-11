module.exports = {
  extends: [
    'airbnb/hooks',
    'eslint-config-airbnb',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
  ], // 规则继承

  env: { // 指定环境, 指定环境为我们提供了其预置的全局变量
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },

  plugins: [ // 引用第三方插件
    'react',
    'babel',
    'promise',
    'react-hooks',
    '@typescript-eslint'
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
          ['@/src', './src'],
          ['@/requests', './src/requests'],
          ['@/router', './src/router'],
          ['@/stores', './src/stores'],
          ['@/pages', './src/pages'],
          ['@/assets', './src/assets'],
          ['@/components', './components'],
          ['@/utils', './utils'],
          ['@/styles', './styles']
        ],
        extensions: ['.tsx', '.jsx', '.js', '.ts', '.json']
      }
    }
  },

  parser: '@typescript-eslint/parser', // 解析器：在使用es6代码中，需要改成babel-eslint

  parserOptions: { // parser 解析代码时的参数
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  /*
   * 规则格式是<插件名称>/<规则名称>: <告警级别>
   * https://cn.eslint.org/docs/rules/
   */
  rules: { // 0 - 关闭规则 1 开启规则，使用警告级别的错误 2 - 开启规则，使用错误级别的错误（error）
    'no-global-assign': [2, { exceptions: ['Object'] }], // 禁止对原生对象或只读的全局对象进行赋值
    'prefer-destructuring': [2, {
      array: false,
      object: true
    }], // 优先使用解构而不是通过成员表达式访问属性
    'comma-dangle': 0, // 不强制 最后一个 ,  ； 末尾逗号
    curly: [2, 'all'], // 语句块不允许省略花括号
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // 只允许使用 function 定义函数
    'multiline-comment-style': ['error', 'starred-block'], // 强制对多行注释使用特定风格 https://cn.eslint.org/docs/rules/multiline-comment-style
    'no-empty-function': ['error', { allow: ['arrowFunctions'] }], // 不允许空函数
    'no-nested-ternary': 0, // 允许三元运算嵌套
    'no-param-reassign': ['error', { props: false }], // 禁止对参数赋值
    'no-plusplus': 0, // 允许 ++  -- 运算
    'no-throw-literal': 0, // 禁止抛出异常字面量
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // 禁止出现未使用过的表达式
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme', 'fixed'], location: 'anywhere' }], // 禁止在注释中使用特定的警告术语
    'no-multiple-empty-lines': 0, // 允许连续空行
    'no-mixed-operators': 0, // 允许混合使用不同的操作符
    'no-prototype-builtins': 0, // 禁止操作 Object.prototype
    'object-curly-newline': ['error', { consistent: true }], // 在花括号内使用一致的换行符
    'import/no-dynamic-require': 0, // 允许使用 require 动态导入
    'import/no-commonjs': 0, // 允许 commonjs 风格
    'import/default': 2, // 确保 import default 的组件里有 export default
    'import/no-extraneous-dependencies': ['error', { // 只允许导入package.json里依赖的包
      devDependencies: false,
      optionalDependencies: false,
    }],

    'react/no-danger': 0, // 允许使用 dangerouslySetInnerHTML
    'react/no-direct-mutation-state': 2, // 禁止直接修改 state
    'react/no-find-dom-node': 2, // 禁止使用 findDomNode
    'react/jsx-child-element-spacing': 0, // 2=不允许 JSX 中将空格定义在花括号内
    'react/jsx-curly-spacing': [2, 'always'], // 2=强制 JSX 中的花括号内有空格
    'react/jsx-equals-spacing': [2, 'never'], // 在JSX属性中强制或禁止等号周围的空格
    'react/jsx-key': 2, // 循环元素必须有key
    'react/jsx-no-target-blank': 0, // 2=禁止使用不安全的 target='_blank' 属性
    'react/jsx-one-expression-per-line': 0, // 关闭 表达式占单行；一行只有一个表达式
    'react/jsx-tag-spacing': [0, { // 验证 JSX 中标签内和周围的空格
      closingSlash: 'never', // 闭合处禁止有空格
      beforeSelfClosing: 'always', // 正确写法：<Hello />
      afterOpening: 'never', // 就使用never
      beforeClosing: 'allow'
    }],

    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-use-before-define': 0,

    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true, // 忽略包含URL的行
        ignoreStrings: true, // 忽略包含双引号或单引号字符串的行
        ignoreTemplateLiterals: true, // 忽略包含模板文字的行
        ignoreRegExpLiterals: true // 忽略包含RegExp文字的行
      }
    ],
    'jsx-a11y/anchor-is-valid': 0, // 锚点必须有效
    'jsx-a11y/click-events-have-key-events': 0,
    'react/forbid-prop-types': ['off', { forbid: ['any'] }],
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
  },
};
