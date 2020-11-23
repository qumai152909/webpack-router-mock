// 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './assets/css/fonts.css';

import Routes from './routes';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={ history }>
      <div className="container">
        {/* 所有页面的公共导航 */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        {/* 所有页面的路由 */}
        <Routes/>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
