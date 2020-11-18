// 所有路由
import React, { Suspense, lazy } from 'react'
import { Switch, Route } from "react-router-dom";

// <LazyComponent> 组件要在Suspense组件中使用
const Home = lazy(() => import(/* webpackChunkName: "Home" */ './home'));
const About = lazy(() => import(/* webpackChunkName: "About" */ './about'));
const Users = lazy(() => import(/* webpackChunkName: "Users" */ './users'));

export default function Routes() {
  return (
    <Suspense>
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