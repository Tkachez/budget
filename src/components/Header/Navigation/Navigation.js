import React from 'react';
import { NavLink } from 'react-router-dom';
import nav from './Navigation.module.css';

const Navigation = () => {
  return(
    <nav className={nav.nav}>
      <div className={nav.nav__links}>
        <NavLink className={nav.nav__link} to='/'>Home</NavLink>
        <NavLink className={nav.nav__link} to='/account'>Account</NavLink>
        <NavLink className={nav.nav__link} to='/reports'>Reports</NavLink>
        <NavLink className={nav.nav__link} to='/statistics'>Statistics</NavLink>
        <NavLink className={nav.nav__link} to='/settings'>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;