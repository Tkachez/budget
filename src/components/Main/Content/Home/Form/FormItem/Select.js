import React from 'react';
import Option from './Option';
import classes from './Select.module.css';
import { inputsChangeActionCreator } from '../../../../../../redux/home-form-reducer';

const Select = (props) => {
  /**
   *
   */
  let options = props.options.map((option, index) =>
    <Option value={option.value} name={option.name} key={index}/>
  );

  /**
   *
   * @param event
   */
  let handleChange = (event) => {
    let value = event.target.value,
      id = event.target.id;
    return props.dispatch(inputsChangeActionCreator(id, value));
  };

  /**
   *
   */
  return (
    <select className={classes.select}
      id={props.id}
      value={props.value}
      name={props.name}
      onChange={ handleChange }
    >{options}</select>
  );

};

export default Select;
