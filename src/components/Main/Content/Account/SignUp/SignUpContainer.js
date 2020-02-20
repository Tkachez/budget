import React from 'react';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUser, createUser, updateInput } from '../../../../../redux/signup-reducer';

class SignUpContainer extends React.Component {

  /**
   *
   * @param props
   */
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  /**
   *
   */
  componentDidMount () {

  }

  /**
   *
   * @param event
   */
  submitForm(event) {
    event.preventDefault();
    this.props.createUser();
  }

  /**
   *
   * @param event
   */
  updateInput(event) {
    this.props.updateInput(event.target);
  }

  /**
   *
   * @return {*}
   */
  render () {
    return (
      <SignUp
        {...this.props.signUp}
        createUser={this.submitForm}
        updateInput={this.updateInput}
      />
    );
  }
}

/**
 *
 * @param state
 * @return {{signUp}}
 */
let mapStateToProps = (state) => {
  return {
    signUp: state.signUp
  };
};



export default compose(
  connect(mapStateToProps, {createUser, getUser, updateInput})
)(SignUpContainer);