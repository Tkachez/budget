import React from 'react';
import classes from './Login.module.css';
import { Field } from 'redux-form';

const Login = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <fieldset>
        <legend>Log in</legend>
        <Field name="username" component="input" type="text"/>
        <Field name="email" component="input" type="text"/>
        <button>Submit</button>
      </fieldset>
    </form>
  );
};

export default Login;
