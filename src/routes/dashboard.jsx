// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import LocationOn from "@material-ui/icons/LocationOn";
import Lock from "@material-ui/icons/Lock"; 
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import DataMarket from "views/DataMarket/DataMarket.jsx";
import Login from '../views/Login/Login.jsx'

const dashboardRoutes = [
  {
    path: "/login",
    sidebarName: "Login/Register",
    navbarName: "Login/Register",
    icon: Lock,
    component: Login
  },
  {
    path: "/dashboard",
    sidebarName: "Adidasium",
    navbarName: "Adidasium Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Data Requests",
    navbarName: "Data Requests",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/dataMarket",
    sidebarName: "Data Marketplace",
    navbarName: "Data Marketplace",
    icon: LibraryBooks,
    component: DataMarket
  },
  { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
];

export default dashboardRoutes;
