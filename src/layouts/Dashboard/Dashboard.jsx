import React from "react";
import { Switch, Redirect } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import UserProtectedRoute from "routes/UserProtectedRoute";

// core components
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes";
import logo from "assets/img/react-logo.png";

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1,
    };
  }
  componentDidMount() {
    const { location } = this.props;
    if (navigator.platform.indexOf("Win") > -1 && location.pathname !== "/") {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    this.checkHash();
  }
  componentWillUnmount() {
    const { location } = this.props;
    if (navigator.platform.indexOf("Win") > -1 && location.pathname !== "/") {
      if (typeof ps !== "undefined") {
        ps.destroy();
      }
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      if (navigator.platform.indexOf("Win") > -1) {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
    this.checkHash();
  }
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "dashboard") {
        return (
          <UserProtectedRoute
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  handleBgClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  checkHash = () => {
    const { location } = this.props;
    if (location.hash) {
      const mainWindow = document.querySelector("main");
      const element = document.querySelector(location.hash);

      setTimeout(() => {
        mainWindow.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop : 0,
        });
      }, 100);
    }
  };
  render() {
    const { location } = this.props;

    if (location.pathname === "/") {
      return <Redirect from="/" to="/tests" />;
    }

    return (
      <>
        <div className="wrapper">
          <Sidebar
            {...this.props}
            routes={routes}
            bgColor={this.state.backgroundColor}
            logo={{
              outterLink: "https://www.secureapi.dev",
              text: "SecureAPI",
              imgSrc: logo,
            }}
            toggleSidebar={this.toggleSidebar}
          />
          <main
            className="main-panel"
            ref="mainPanel"
            data={this.state.backgroundColor}
          >
            <Switch>{this.getRoutes(routes)}</Switch>
            {// we don't want the Footer to be rendered on map page
            this.props.location.pathname.indexOf("maps") !== -1 ? null : (
              <Footer fluid />
            )}
          </main>
        </div>
      </>
    );
  }
}

export default Dashboard;
