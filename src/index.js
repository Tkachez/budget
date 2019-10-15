import './index.css';
import storage from './redux/redux-storage';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';


let renderEntireTree = (props) => {
  ReactDOM.render(
    <App storage={props} dispatch={storage.dispatch.bind(storage)}/>,
    document.getElementById('root')
  );
};
console.log(storage);
renderEntireTree(storage.getState());
storage.subscribe(()=>{
  let state = storage.getState();
  renderEntireTree(state);
});


