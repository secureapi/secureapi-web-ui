import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";
import Login from 'views/Login';
import StoreProvider from "store/StoreProvider";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <StoreProvider.Provider>
    <Router history={hist}>
      <Switch>
        <Route exact path={["/login/:platform", "/login"]} component={Login} />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
  </StoreProvider.Provider>,
  document.getElementById("root")
);
