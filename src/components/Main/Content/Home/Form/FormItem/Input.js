import React from 'react';
import classes from './Input.module.css';
import { inputsChangeActionCreator } from '../../../../../../redux/home-form-reducer';

const Input = (props) => {

  /**
   *
   * @param event
   */
  let inputChange = (event) => {
    let value = event.target.value,
      id= event.target.id;
    props.dispatch(inputsChangeActionCreator(id,value));
  };

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