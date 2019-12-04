import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Login from './Login';
import { reduxForm } from 'redux-form';
import { getUser } from '../../../../../redux/account-reducer';
import Message from '../../../../Elements/Message/Message';

class LoginContainer extends React.Component {

  /**
   *
   * @param props
   */
  constructor(props){
    super(props);

    this.submit = this.submit.bind(this);
  }

  /**
   *
   */
  componentDidMount () {
    this.setState({isLoggedIn: this.props.isLoggedIn});
  }

  /**
   *
   * @param data
   */
  submit(data){
    this.props.getUser(data.username, data.email);
  };

  /**
   *
   * @return {*}
   */
  render () {
    console.log(this.props);
    return (
      <div>
        <LoginReduxForm onSubmit={this.submit}/>
        {this.props.message ? <Message message={this.props.message}/> : null}
      </div>
    );
  }

}

let LoginReduxForm = reduxForm({
  form: 'login'
})(Login);

let mapStateToProps = (state) => {
  return {
    isLoggedIn: state.account.isLoggedIn,
    message: state.account.message
  };
};

export default compose(
  connect(mapStateToProps,{getUser})
)(LoginContainer);