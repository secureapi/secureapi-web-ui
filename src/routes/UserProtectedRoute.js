import * as React from 'react';

import StoreProvider, { selectors } from 'store/StoreProvider'
import ConditionalRoute from './ConditionalRoute';

const { connect } = StoreProvider

const UserUserProtectedRoute = ({
  isSignedIn,
  ...props
}) => (
  <ConditionalRoute isConditionSatisfied={isSignedIn} {...props} />
);

UserUserProtectedRoute.defaultProps = {
  config: { redirectTo: '/login' }
};

export default connect(state => ({
  isSignedIn: selectors.user.isSignedIn(state)
}))(UserUserProtectedRoute);
