import React from 'react';
import Select from "./Select";
import classes from './Form.module.css';


export default class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formValue: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange= this.handleSelectChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.formValue);
  };

  handleSelectChange(value) {
    this.setState({formValue: value});
  };

  render() {
    const props = this.props;
    const value = this.state.formValue;
    return(
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <fieldset className={classes.fieldset}>
            <legend>Add purchase</legend>
            <label htmlFor={props.form.formIds.select}>{props.form.formLabels.select}</label>
            <Select
                onSelectChange={ this.handleSelectChange }
                id={props.form.formIds.select}
                name={props.form.formNames.select}
                value={value}
                options={props.form.options}
            />
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
};