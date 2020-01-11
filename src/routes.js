/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Notifications from "views/Notifications.jsx";
import TableList from "views/TableList.jsx";
import Solution from "./views/Solutions";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";

var routes = [
  {
    path: "/tables",
    name: "Tests",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-refresh-02",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Solutions",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-bulb-63",
    component: Solution,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Subscribe (soon)",
    rtlName: "الرموز",
    icon: "tim-icons icon-money-coins",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Talk to us",
    rtlName: "إخطارات",
    icon: "tim-icons icon-send",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Log Out",
    rtlName: "طباعة",
    icon: "tim-icons icon-button-power",
    component: Typography,
    layout: "/admin"
  }
];
export default routes;
