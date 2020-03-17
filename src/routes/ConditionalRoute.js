import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ConditionalRoute = ({
  component: Component,
  isConditionSatisfied,
  config: { redirectTo },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isConditionSatisfied ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirectTo} />
      )
    }
  />
);

export default ConditionalRoute;
