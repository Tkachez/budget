import React from 'react';
import FormItem from './FormItem/FormItem';
import classes from './Form.module.css';


export default class Form extends React.Component {

  /**
   *
   * @param props
   */
  constructor(props){
    super(props);
    this.state = {
      submitData: {
        type: 'bill',
        cost: null,
        comment: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    console.log(this.state);
    // if(event.target.id === 'cost'){
    //   this.setState()
    // }
  };

  handleSubmit(event) {
    event.preventDefault();
  };

  formItems = this.props.form.items.map((item ,index) => {
    return (
      <FormItem onChange={ this.handleChange }
                data={item}
                key={index}/>
    );
  });

  /**
   *
   * @return {*}
   */
  render() {
    console.log(this.state);
    return(
        <form className={classes.form} onSubmit={ this.handleSubmit }>
          <fieldset className={classes.fieldset}>
            <legend>Add purchase</legend>
            { this.formItems }
          </fieldset>
        </form>
    );
  };
};