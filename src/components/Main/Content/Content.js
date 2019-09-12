import React from 'react';
import content from './Content.module.css';
import { Route } from 'react-router-dom';
import  { Home, Account, Settings } from './index'

const Content = () => {
    return(
        <article className={content.content}>
          <Route path='/' exact component={Home}/>
          <Route path='/account' exact component={Account}/>
          <Route path='/settings' exact component={Settings}/>
        </article>
    );
};

export default Content;