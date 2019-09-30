import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import storage from './storage';

ReactDOM.render(
  <App storage={storage}/>,
  document.getElementById('root')
);
