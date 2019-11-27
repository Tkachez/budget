import React from 'react';
import { connect } from 'react-redux';
import { setUser, updateInput } from '../../../../redux/login-reducer';
import Success from './Success';
import Login from './Login';

class LoginContainer extends React.Component{
  constructor (props){
    super(props);
    this.login = this.login.bind(this);
    // this.changeInput = this.changeInput.bind(this);
  }

  // changeInput (event) {
  //     this.props.updateInput(event.target);
  // }

  login(event) {
    event.preventDefault();
    this.props.setUser();
  }

  render () {
    console.log(this.props);
    return (
      this.props.login.isLoggedIn ? <Success/> : <Login
        {...this.props.login}
        changeInput={this.props.updateInput}
        login={this.login}/>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.login
  };
};

export default connect(mapStateToProps,{
  setUser,
  updateInput
})(LoginContainer);