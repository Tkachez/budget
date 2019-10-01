import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {

  let inputChange = (event) => props.onInputChange(event);

  return (
    <input className={classes.input}
      onChange={ inputChange }
      type={props.type}
      name={props.name}
      value={props.value}
      id={props.id}
      />
  );
};

export default Input;