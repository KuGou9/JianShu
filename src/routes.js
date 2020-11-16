import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const Header = lazy(() => import('./header/Header'));
const Home = lazy(() => import('./home/Home'));
const Detail = lazy(() => import('./detail/Detail'));
const Login = lazy(() => import('./login/Login'));
const Reg = lazy(() => import('./reg/Reg'));

export default (
  <Suspense fallback={<div>Loading……</div>}>
    <Route path="/" component={Header}></Route>
    <Route path="/" exact component={Home}></Route>
    <Route path="/detail" exact component={Detail}></Route>
    <Route path="/login" exact component={Login}></Route>
    <Route path="/reg" component={Reg}></Route>
  </Suspense>
);
