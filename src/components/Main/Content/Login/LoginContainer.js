import React from 'react';
import { connect } from 'react-redux';
import { checkUser, setUser, updateInput } from '../../../../redux/login-reducer';
import Success from './Success';
import Login from './Login';

class LoginContainer extends React.Component{

  constructor(props){
    super(props);
    this.check = this.check.bind(this);
  }

  check (event) {
    event.preventDefault();
    this.props.checkUser();
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

export default connect(mapStateToProps,{
  checkUser,
  setUser,
  updateInput
})(LoginContainer);