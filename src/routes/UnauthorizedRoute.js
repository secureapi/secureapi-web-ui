import React from "react";
import Cookies from "js-cookie";

import { COOKIES } from "variables/consts";
import StoreProvider, { selectors } from "store/StoreProvider";
import ConditionalRoute from "./ConditionalRoute";

const UnauthorizedRoute = ({ ...props }) => {
  const isSignedIn = StoreProvider.useSelector(selectors.user.isSignedIn);
  const redirectTo = Cookies.get(COOKIES.REDIRECT) || "/";

  return (
    <ConditionalRoute
      {...props}
      isConditionSatisfied={!isSignedIn}
      config={{ redirectTo }}
    />
  );
};

UnauthorizedRoute.defaultProps = {
  config: { redirectTo: "/" },
};

export default UnauthorizedRoute;
