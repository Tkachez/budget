import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="app">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
