// 页面所有路由
import React, { Suspense, lazy } from 'react'
import { Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import Loading from '@/components/Loading';

// <LazyComponent> 组件要在Suspense组件中使用
const Home = lazy(() => import(/* webpackChunkName: "home" */ '../pages/home'));
const Counter = lazy(() => import(/* webpackChunkName: "counter" */ '../pages/counter'));
const Users = lazy(() => import(/* webpackChunkName: "users" */ '../pages/users'));
const Theme = lazy(() => import(/* webpackChunkName: "theme" */ '../pages/theme'));

export default function AppRoutes() {
  return (
    <Suspense fallback={ <Loading/> }>
      <Switch>
        <Route exact path="/"><Users/></Route>
        <Route exact path="/counter"><Counter /></Route>
        <Route exact path="/users"><Users/></Route>
        <Route exact path="/home"><Home/></Route>
        <Route exact path="/theme"><Theme/></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>
  );
}
