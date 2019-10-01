import React from 'react';
import { Input, Label, Select } from './index';
import classes from './FormItem.module.css';

export default class FormItem extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      selectValue: 'bill',
      submitData: {}
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(value) {
    this.setState(()=> {
      return {inputValue: value};
    })
  };

  handleSelectChange(value) {
    console.log(value);
    let state = this.state;
    state.selectValue = value;
    this.setState(state);
  };

  handleSubmit(value) {
    let props = this.props;
    props.getSubmitData(value)
  };

  render() {
    console.log(this.state);
    const props = this.props;
    const selectValue = this.state.selectValue;
    let value = this.state.inputValue;
    if(props.data.id === 'submit'){
      value = 'Submit';
    }
    return (
      <div className={classes.item}>
        <Label for={props.data.id} label={props.data.label}/>
        {this.props.data.origin === 'input' ? (
          <Input
            onChange={ this.handleInputChange }
            value={value}
            type={props.data.type}
            id={props.data.id}
          />
          ) : (
            <Select
              onSelectChange={ this.handleSelectChange}
              options={this.props.data.options}
              value={selectValue}
              id={props.data.id}
            />
          )
        }
      </div>
    );
  }
};
/*<Input
 onInputChange = { this.handleValueInputChange }
 id={props.form.formIds.value}
 type="number" name={props.form.formNames.value}
 value={this.state.valueInput}/>
 <Select
 onSelectChange={ this.handleSelectChange }
 id={props.form.formIds.select}
 name={props.form.formNames.select}
 value={this.state.selectValue}
 options={props.form.options}
 />
 <button
 id={props.form.formIds.button}
 type="submit"
 name={props.form.formNames.button}
 >{props.form.formLabels.button}</button>*/

