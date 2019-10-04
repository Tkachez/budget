import React from 'react';
import Option from './Option';
import classes from './Select.module.css';

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
  let handleChange = (event) => props.onChange(event);

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
