import React from 'react';
import content from './Content.module.css';
import { Route } from 'react-router-dom';
import { SignUpContainer, LoginContainer, AccountContainer, Home, StatisticsContainer, Settings, ReportsContainer } from './index';

const Content = () => {
  return (
    <article className={content.content}>
      <Route path='/' exact render={ ()=> <Home /> }/>
      <Route path='/account' exact render={ ()=> <AccountContainer/> }/>
      <Route path='/account/create' exact render={ ()=> <SignUpContainer/> }/>
      <Route path='/account/login' exact render={ ()=> <LoginContainer/>}/>
      <Route path='/statistics' exact render={ ()=> <StatisticsContainer/> }/>
      <Route path='/settings' exact render={ ()=> <Settings/> }/>
      <Route path='/reports' exact render={ ()=> <ReportsContainer/> }/>
    </article>
  );
};

export default Content;