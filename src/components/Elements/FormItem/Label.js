import React from 'react';
import classes from './Label.module.css';

const Label = (props) => {
  return (
    <label className={classes.label} htmlFor={props.for}>{props.label}</label>
  );
};

export default Label;