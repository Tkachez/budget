import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export let renderEntireTree = (props) => {
  ReactDOM.render(
    <App storage={props}/>,
    document.getElementById('root')
  );
};