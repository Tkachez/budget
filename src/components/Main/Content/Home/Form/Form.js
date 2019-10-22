import React from 'react';
import classes from './Form.module.css';
import FormItem from './FormItem/FormItem'

const Form = (props) => {

  /**
   *
   */
  let items = props.items.map((item,index) => <FormItem data={item} key={index} onChange={props.inputChange}/>);

  /**
   *
   * @return {*}
   */
  return (
    <form className={classes.form} onSubmit={props.submitForm}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>Add purchase</legend>
        {items}
      </fieldset>
    </form>
  );
};

export default Form;
