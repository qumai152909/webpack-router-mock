## eact.lazy 函数能让你像渲染常规组件一样处理动态引入（的组件）。

使用之前：
import OtherComponent from './OtherComponent';
使用之后：
const OtherComponent = React.lazy(() => import('./OtherComponent'));


React.lazy 接受一个函数，这个函数需要动态调用 import()。它必须返回一个 Promise，该 Promise 需要 resolve 一个 default export 的 React 组件。

应在 Suspense 组件中渲染 lazy 组件; 如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）。

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

## 异常捕获边界（Error boundaries）

如果模块加载失败（如网络问题），它会触发一个错误。你可以通过异常捕获边界（Error boundaries）技术来处理这些情况，以显示良好的用户体验并管理恢复事宜。

```jsx harmony
import React, { Suspense } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

const MyComponent = () => (
  <div>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
);
```

## 使用 Hooks：useReducer 代替 Redux。
   
  
https://github.com/webmasterdevlin/mobx-6-course/blob/master/package.json  mobx-6-course

//https://github.com/IFmiss/react-website


## lint-staged 和 husky
每次提交代码前， 我们都要对代码进行格式化以及 eslint 和 stylelint 的规则校验，以此来强制规范我们的代码风格，以及防止隐性 BUG 的产生。

那么有什么办法只对我们 git 缓存区最新改动过的文件进行以上的格式化和 lint 规则校验呢？
    答案就是 lint-staged 。

我们还需要另一个工具 husky ，它会提供一些钩子，比如执行 git commit 之前的钩子 pre-commit ，借助这个钩子我们就能执行 lint-staged 所提供的代码文件格式化及 lint 规则校验！

可能大家搜索一些文章的时候，会发现在 lint-staged 中还配置了一个 git add ，实际上在 v10 版本之后任何被修改了的原 staged 区的文件都会被自动 git add，所以无需再添加。

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
 "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "eslint --config .eslintrc.js"
    ],
    "src/**/*.{css,less,scss}": [
      "stylelint --config .stylelintrc.js"
    ],
    "src/**/*.{ts,tsx,js,json,html,yml,css,less,scss,md}": [
      "prettier --write"
    ]
  }
}
```

## commit log
/**
 * build : 改变了build工具 如 webpack
 * ci : 持续集成新增
 * chore : 构建过程或辅助工具的变动
 * feat : 新功能
 * docs : 文档改变
 * fix : 修复bug
 * perf : 性能优化
 * refactor : 某个已有功能重构
 * revert : 撤销上一次的 commit
 * style : 代码格式改变
 * test : 增加测试
 * anno: 增加注释
 */

