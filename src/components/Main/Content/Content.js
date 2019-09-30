import React from 'react';
import content from './Content.module.css';
import { Route } from 'react-router-dom';
import { Account, Home, Settings } from './index';

const Content = (props) => {
  return (
    <article className={content.content}>
      <Route path='/' exact render={ ()=> <Home home={props.content.home}/> }/>
      <Route path='/account' exact render={ ()=> <Account/> }/>
      <Route path='/settings' exact render={ ()=> <Settings/> }/>
    </article>
  );
};

export default Content;