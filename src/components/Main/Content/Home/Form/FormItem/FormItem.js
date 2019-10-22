import React from 'react';
import { Input, Label, Select } from './index';
import classes from './FormItem.module.css';

const FormItem = (props) => {
  return (
    <div className={classes.item}>
      <Label for={props.data.id} label={props.data.label}/>
      {props.data.origin === 'input' ? (
        <Input
          classes={classes.input}
          onChange={props.onChange}
          value={props.data.value}
          type={props.data.type}
          min={props.data.min ? props.data.min : null }
          id={props.data.id}
        />
      ) : (
        <Select
          dispatch={props.dispatch}
          onChange={props.onChange}
          value={props.data.value}
          options={props.data.variants}
          id={props.data.id}
        />
      )
      }
    </div>
  );
};

export default FormItem;
