import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { getUser } from '../../../../redux/account-reducer';
import Account from './Account';

class AccountContainer extends React.Component {

  /**
   *
   */
  componentDidMount () {
    this.props.getUser(this.props.account.user);
  }

  /**
   *
   * @return {*}
   */
  render () {
    return (
      <Account {...this.props.account}/>
    );
  }
}

/**
 *
 * @param state
 * @return {{account}}
 */
let mapStateToProps = (state) => ({
  account: state.account
});

export default compose(
  connect(mapStateToProps,{getUser}),
  withAuthRedirect
)(AccountContainer);

