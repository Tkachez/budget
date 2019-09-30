import React, { Component } from 'react';
import classes from './Header.module.css';
import { Logo, Navigation, Search } from './index';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isToggled: true
    };
  };

  render () {
    return (
      <header className={classes.header}>
        <Logo/>
        <Navigation/>
        <Search/>
      </header>
    );
  };
}

export default Header;