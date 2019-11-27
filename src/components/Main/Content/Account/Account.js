import React from 'react';
import classes from './Account.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Account = (props) => {

  let style = {
    verticalAlign: 'sub'
  };

  return (
    <section className={classes.main}>
      <div className={classes.profileImage}>{props.profileImage ? props.profileImage : <FaUserCircle style={style}/>}</div>
      <form onSubmit={ props.createUser }>
        <fieldset className={classes.fieldSet}>
          <legend>Create account</legend>
          <label className={classes.formLabel} htmlFor="file">Add file</label>
          <input id="file" placeholder="" className={classes.formItem} type="file"/>
          <label className={classes.formLabel} htmlFor="text">Username</label>
          <input id="name" className={classes.formItem} type="text" onChange={props.updateInput}/>
          <label className={classes.formLabel} htmlFor="email">E-mail</label>
          <input id="email" className={classes.formItem} type="email" onChange={props.updateInput}/>
          <input id="submit" className={classes.formItem} value="Submit" type="submit"/>
        </fieldset>
      </form>
      <NavLink to='/account/login'>Already have account? Log in Here</NavLink>
    </section>
  );
};

export default Account;