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
import Icons from "views/Icons.jsx";
import Notifications from "views/Notifications.jsx";
import Tests from "views/Tests/Tests";
import Solution from "./views/Solutions/Solutions";
import UserProfile from "views/UserProfile.jsx";

const routes = [
  {
    path: "/tests",
    name: "Tests",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-refresh-02",
    component: Tests,
    layout: "dashboard",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "dashboard",
  },
  {
    path: "/solutions",
    name: "Solutions",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-bulb-63",
    component: Solution,
    layout: "dashboard",
  },
  {
    path: "/subscription",
    name: "Subscribe (soon)",
    rtlName: "الرموز",
    icon: "tim-icons icon-money-coins",
    component: Icons,
    layout: "dashboard",
  },
  {
    path: "/feedback",
    name: "Talk to us",
    rtlName: "إخطارات",
    icon: "tim-icons icon-send",
    component: Notifications,
    layout: "dashboard",
  },
];
export default routes;
