import React, { useEffect } from "react";
import Cookies from "js-cookie";

import { COOKIES } from "variables/consts";
import StoreProvider, { selectors } from "store/StoreProvider";
import ConditionalRoute from "./ConditionalRoute";

const UserUserProtectedRoute = ({ ...props }) => {
  const isSignedIn = StoreProvider.useSelector(selectors.user.isSignedIn);

  useEffect(() => {
    Cookies.remove(COOKIES.REDIRECT);
  }, []);

  return (
    <ConditionalRoute
      {...props}
      isConditionSatisfied={isSignedIn}
      config={{
        redirectTo: `/login?redirect=${props.location.pathname}${props.location.search}`,
      }}
    />
  );
};

UserUserProtectedRoute.defaultProps = {
  config: { redirectTo: "/login" },
};

export default UserUserProtectedRoute;
