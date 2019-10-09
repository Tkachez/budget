import './index.css';
import storage from './storage';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';


let renderEntireTree = (props) => {
  ReactDOM.render(
    <App storage={props}/>,
    document.getElementById('root')
  );
};

renderEntireTree(storage.getContent());
storage.subscribe(renderEntireTree);

