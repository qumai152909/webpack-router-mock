// 基本路由
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// const SalePrice = React.lazy(() => import(/* webpackChunkName: "salePrice" */ '../pages/salePrice'));
const Home = React.lazy(() => import(/* webpack */ ''));

export default function App() {
  return (
    <Router>
      <div className="container">
        {/* 所有页面的公共导航 */}
        <nav></nav>
        {/* 所有页面的路由 */}
        <Switch>
          <Route path="about">
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}