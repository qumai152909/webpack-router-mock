// 页面所有路由
import React, { Suspense, lazy } from 'react'
import { Switch, Route } from "react-router-dom";
import Loading from '../components/Loading';

// <LazyComponent> 组件要在Suspense组件中使用
const Home = lazy(() => import(/* webpackChunkName: "Home" */ '../views/home'));
const About = lazy(() => import(/* webpackChunkName: "About" */ '../views/about'));
const Users = lazy(() => import(/* webpackChunkName: "Users" */ '../views/users'));

export default function Routes() {
  return (
    <Suspense fallback={ <Loading/> }>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/users">
          <Users/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Suspense>
  );
}