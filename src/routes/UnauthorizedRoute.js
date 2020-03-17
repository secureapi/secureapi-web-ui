import * as React from 'react';

import StoreProvider, { selectors } from 'store/StoreProvider'
import ConditionalRoute from './ConditionalRoute';

const { connect } = StoreProvider

const UnauthorizedRoute = ({
  isSignedIn,
  ...props
}) => (
  <ConditionalRoute isConditionSatisfied={!isSignedIn} {...props} />
);

UnauthorizedRoute.defaultProps = {
  config: { redirectTo: '/' }
};

export default connect(state => ({
  isSignedIn: selectors.user.isSignedIn(state)
}))(UnauthorizedRoute);
