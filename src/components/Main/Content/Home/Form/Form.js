import React from 'react';
import FormItem from './FormItem/FormItem';
import classes from './Form.module.css';
import {submitFormActionCreator} from '../../../../../storage';

const Form = (props) => {
  /**
   *
   * @type {Array}
   */
  let formItems = props.form.items.map((item, index) =>
    <FormItem
      data={item}
      key={index}
      dispatch={props.dispatch}
    />
  );

  let submitForm = (event) => {
    event.preventDefault();
    return props.dispatch(submitFormActionCreator());
  };

  /**
   *
   * @return {*}
   */
  return (
    <form className={classes.form} onSubmit={submitForm}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>Add purchase</legend>
        {formItems}
      </fieldset>
    </form>
  );
};

export default Form;
