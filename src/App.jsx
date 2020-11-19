// 顶层组件，入口组件
import React from "react";
import { Router, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Routes from './routes';

const history = createBrowserHistory();

export default function App() {
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