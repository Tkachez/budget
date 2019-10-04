import React from 'react';
import FormItem from './FormItem/FormItem';
import classes from './Form.module.css';

const Form = (props) => {
  /**
   *
   * @type {Array}
   */
  let formItems = props.form.items.map((item, index) =>
    <FormItem data={item}
              key={index}/>
  );

  /**
   *
   * @return {*}
   */
  return (
    <form className={classes.form} onSubmit={props.form.action}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>Add purchase</legend>
        {formItems}
      </fieldset>
    </form>
  );
};

export default Form;
