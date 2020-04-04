import * as React from "react";

import StoreProvider, { selectors } from "store/StoreProvider";
import ConditionalRoute from "./ConditionalRoute";

const UnauthorizedRoute = ({ ...props }) => {
  const isSignedIn = StoreProvider.useSelector(selectors.user.isSignedIn);
  return <ConditionalRoute isConditionSatisfied={!isSignedIn} {...props} />;
};

UnauthorizedRoute.defaultProps = {
  config: { redirectTo: "/" },
};

export default UnauthorizedRoute;
