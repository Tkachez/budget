import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = (props) => {
    return (
      <BrowserRouter>
        <div className="app">
          <Header props={props.storage}/>
          <Main main={props.storage.main}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
};

export default App;
