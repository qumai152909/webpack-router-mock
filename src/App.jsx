// 项目入口文件
import React from 'react';
import { Router } from "react-router-dom";
import Layout from '@/components/Layout';
import AppRoutes from '@/router';
import '@/styles/app.theme.less';
import '@/styles/app.less';

const App = ({ history }) => (
  <Router history={ history }>
    <Layout>
      <AppRoutes />
    </Layout>
  </Router>
);

export default App;
