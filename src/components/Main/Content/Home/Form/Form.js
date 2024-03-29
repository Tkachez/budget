import React from 'react';
import classes from './Form.module.css';
import FormItem from '../../../../Elements/FormItem/FormItem'

const Form = (props) => {

  /**
   *
   */
  let items = props.items.map(item => <FormItem data={item} key={item.id} onChange={props.inputChange}/>);

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
