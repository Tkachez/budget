import React from 'react';
import Form from './Form';
import classes from './Form.module.css';
import { submitFormActionCreator } from '../../../../../redux/home-form-reducer';

const FormContainer = (props) => {

  let submitForm = (event) => {
    event.preventDefault();
    return props.dispatch(submitFormActionCreator());
  };

  /**
   *
   * @return {*}
   */
  return <Form/>
  ;
};

export default FormContainer;
