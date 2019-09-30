import React from 'react';
import classes from './Form.module.css';

const Form = (props) => {

  let SelectItem = (props) => {
    return (
      <option value={props.value}>{props.name}</option>
    );
  };

  let options = props.form.options.map((option, index) => {
      return (
        <SelectItem value={option.value} name={option.name} key={index}/>
      );
    }
  );

  let billType = React.createRef();

  let processForm = (event) => {
    console.log(event);
    alert(billType.current.value);
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={() => processForm}>
      <fieldset className={classes.fieldset}>
        <legend>Add purchase</legend>
        <label htmlFor={props.form.formIds.select}>{props.form.formLabels.select}</label>
        <select id={props.form.formIds.select} name={props.form.formNames.select} ref={billType}>
          {options}
        </select>
        <label htmlFor={props.form.formIds.value}>{props.form.formLabels.value}</label>
        <input id={props.form.formIds.value} type="number" name={props.form.formNames.value}/>
        <label htmlFor={props.form.formIds.comment}>{props.form.formLabels.comment}</label>
        <input id={props.form.formIds.comment} type="text" name={props.form.formNames.comment}/>
        <label htmlFor={props.form.formIds.button}>{props.form.formLabels.button}</label>
        <input id={props.form.formIds.button} type="submit" name={props.form.formNames.button} value={props.form.formLabels.button}/>
      </fieldset>
    </form>
  );
};

export default Form;