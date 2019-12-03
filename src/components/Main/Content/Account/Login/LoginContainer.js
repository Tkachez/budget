import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initUserCheck, setUser, updateInput } from '../../../../../redux/login-reducer';
import Success from '../../../../Elements/SuccessMessage/Success';
import Login from './Login';

class LoginContainer extends React.Component{

  /**
   *
   * @param props
   */
  constructor(props){
    super(props);
    this.check = this.check.bind(this);
  }

  /**
   *
   * @param event
   */
  check (event) {
    event.preventDefault();
    this.props.initUserCheck();
  }

  /**
   *
   * @returns {*}
   */
  render () {
    console.log(this.props);
    return (
      this.props.login.isLoggedIn ? <Success/> : <Login
        {...this.props.login}
        changeInput={this.props.updateInput}
        checkUser={this.check}/>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.login
  };
};

export default compose(
  connect(mapStateToProps,{initUserCheck,setUser,updateInput})
)(LoginContainer);