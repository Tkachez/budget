import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  /**
   *
   */
  return (
    <input className={classes.input}
           onChange={props.onChange}
           type={props.type}
           name={props.name}
           value={props.value}
           min={props.min}
           id={props.id}
    />
  );
};

export default Input;