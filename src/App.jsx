// 项目入口文件
import React from 'react';
import { Router } from "react-router-dom";
import NavBar from '@/components/NavBar';
import AppRouter from './router';
import '@/styles/app.theme.less';
import '@/styles/app.less';


function App({ history }) {
  return (
    <Router history={ history }>
      <div className="container">
        {/* 所有页面的公共导航 */}
        <NavBar />
        {/* 所有路由 */}
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
