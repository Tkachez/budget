import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Popup from 'react-popup';
import './App.css';

const App = () => {
    return (
        <div className="app">
          <Header />
          <Main />
          <Footer/>
          <Popup/>
        </div>
    );
};

export default App;
