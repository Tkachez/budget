import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa';
import nav from './Navigation.module.css';

const Navigation = () => {
  return(
    <nav className={nav.nav}>
      <div className={nav.nav__links}>
        <NavLink className={nav.nav__link} to='/'>Home</NavLink>
        <NavLink className={nav.nav__link} to='/reports'>Reports</NavLink>
        <NavLink className={nav.nav__link} to='/statistics'>Statistics</NavLink>
        <NavLink className={nav.nav__link} to='/settings'>Settings</NavLink>
        <NavLink className={nav.nav__link} to='/account'>
          <FaUserCircle/>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;