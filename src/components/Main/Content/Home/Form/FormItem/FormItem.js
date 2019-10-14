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
          dispatch={props.dispatch}
          onChange={props.data.action}
          value={props.data.value}
          type={props.data.type}
          id={props.data.id}
        />
      ) : (
        <Select
          dispatch={props.dispatch}
          onChange={props.data.action}
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
