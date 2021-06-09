// 打包入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './App';

const appHistory = createBrowserHistory();

ReactDOM.render(<App history={ appHistory } />, document.getElementById('app'));
