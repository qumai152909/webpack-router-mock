// 项目入口文件
import React from 'react';
import { Router } from "react-router-dom";
import Layout from '@/components/Layout';
import ErrorBoundary from '@/components/ErrorBoundary';
import { rootStore, StoresContext } from '@/stores';
import AppRoutes from '@/router';
import '@/styles/app.theme.less';
import '@/styles/app.less';

const App = ({ history }) => (
  <StoresContext.Provider value={rootStore}>
    <Router history={ history }>
      <ErrorBoundary>
        <Layout>
          <AppRoutes />
        </Layout>
      </ErrorBoundary>
    </Router>
  </StoresContext.Provider>
);

export default App;
