import React from 'react';
import content from './Content.module.css';
import { Route } from 'react-router-dom';
import { Account, Home, StatisticsContainer, Settings, ReportsContainer } from './index';

const Content = () => {
  return (
    <article className={content.content}>
      <Route path='/' exact render={ ()=> <Home /> }/>
      <Route path='/account' exact render={ ()=> <Account/> }/>
      <Route path='/statistics' exact render={ ()=> <StatisticsContainer/> }/>
      <Route path='/settings' exact render={ ()=> <Settings/> }/>
      <Route path='/reports' exact render={ ()=> <ReportsContainer/> }/>
    </article>
  );
};

export default Content;