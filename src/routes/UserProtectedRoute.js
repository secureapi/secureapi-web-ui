import * as React from "react";

import StoreProvider, { selectors } from "store/StoreProvider";
import ConditionalRoute from "./ConditionalRoute";

const UserUserProtectedRoute = ({ ...props }) => {
  const isSignedIn = StoreProvider.useSelector(selectors.user.isSignedIn);

  return <ConditionalRoute isConditionSatisfied={isSignedIn} {...props} />;
};

UserUserProtectedRoute.defaultProps = {
  config: { redirectTo: "/login" },
};

export default UserUserProtectedRoute;
