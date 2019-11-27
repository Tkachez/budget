import React from 'react';
import classes from './Login.module.css';

const Login = (props) => {
  return (
    <section className={classes.main}>
        <form onSubmit={(e) => props.login(e)}>
        <fieldset>
          <legend>Log in</legend>
          <label>
            <input id='name' onChange={(e) => props.changeInput(e)} value={props.items[0].value} type='text'/>
            <input id='email' onChange={(e) => props.changeInput(e)} value={props.items[1].value} type='email'/>
            <button type='submit'>Submit</button>
          </label>
        </fieldset>
      </form>
    </section>
  );
};

export default Login;
