// 打包入口文件
import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';

import '@/styles/index.css';
import App from './App';

const appHistory = createBrowserHistory();

render(<App history={ appHistory } />, document.getElementById('app'));
