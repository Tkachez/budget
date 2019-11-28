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
   */
  return (
    <select className={classes.select}
            onChange={props.onChange}
            id={props.id}
            value={props.value}
            name={props.name}
    >{options}</select>
  );

};

export default Select;
