import './index.css';
import { storage } from './storage';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';


export let renderEntireTree = (storage) => {
  ReactDOM.render(
    <App storage={storage}/>,
    document.getElementById('root')
  );
};

renderEntireTree(storage);
storage.main.subscribe(renderEntireTree);

