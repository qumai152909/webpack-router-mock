// 页面所有路由
import React, { Suspense, lazy } from 'react'
import { Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import Loading from '@/components/Loading';

// <LazyComponent> 组件要在Suspense组件中使用
const Home = lazy(() => import(/* webpackChunkName: "home" */ '../pages/home'));
const About = lazy(() => import(/* webpackChunkName: "about" */ '../pages/about'));
const Users = lazy(() => import(/* webpackChunkName: "users" */ '../pages/users'));

export default function AppRouter() {
  return (
    <Suspense fallback={ <Loading/> }>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/users"><Users/></Route>
        <Route exact path="/home"><Home/></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>
  );
}
