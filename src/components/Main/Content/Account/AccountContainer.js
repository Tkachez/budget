import React from 'react';
import Account from './Account';
import { connect } from 'react-redux';
import { setUser, login, logout, createUser, updateInput } from '../../../../redux/account-reducer';
import axios from 'axios';

class AccountContainer extends React.Component {

  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  /**
   *
   */
  componentDidMount () {
    axios.get(`http://localhost:5000/users/Tkach`).then( res => {this.props.setUser(res.data)})
    .catch( err => console.log(`Error: ${err}`))
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
      <Account
        {...this.props.account}
        createUser={this.submitForm}
        updateInput={this.updateInput}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    account: state.account
  };
};



export default connect(mapStateToProps, {
  createUser,
  setUser,
  login,
  logout,
  updateInput,
})(AccountContainer);