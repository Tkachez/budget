import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
  account: state.account.isLoggedIn
});


export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render () {
      if(!this.props.account) return <Redirect to='/account/create'/>;
      return <Component {...this.props}/>
    }
  }

  return connect(mapStateToProps)(RedirectComponent);

};