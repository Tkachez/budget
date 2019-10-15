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
          <Header />
          <Main main={props.storage} dispatch={props.dispatch}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
};

export default App;
