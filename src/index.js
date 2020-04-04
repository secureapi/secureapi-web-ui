import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import DashboardLayout from "layouts/Dashboard/Dashboard";
import Login from "views/Login/Login";
import StoreProvider from "store/StoreProvider";
import UnauthorizedRoute from "routes/UnauthorizedRoute";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

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
