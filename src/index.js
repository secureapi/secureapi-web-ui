import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Rollbar from "rollbar";

import DashboardLayout from "layouts/Dashboard/Dashboard";
import Login from "views/Login/Login";
import StoreProvider from "store/StoreProvider";
import UnauthorizedRoute from "routes/UnauthorizedRoute";
import env from "variables/env";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

if (env.ROLLBAR_ACCESS_TOKEN) {
  new Rollbar({
    accessToken: env.ROLLBAR_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: env.ENVIRONMENT,
    },
  });
}

const hist = createBrowserHistory();

ReactDOM.render(
  <StoreProvider.Provider>
    <Router history={hist}>
      <Switch>
        <UnauthorizedRoute
          exact
          path={["/login/:platform", "/login"]}
          component={Login}
        />
        <Route path="/" render={(props) => <DashboardLayout {...props} />} />
      </Switch>
    </Router>
  </StoreProvider.Provider>,
  document.getElementById("root")
);
