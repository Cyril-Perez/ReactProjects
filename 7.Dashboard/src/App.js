import React from "react";
import "./App.css";
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";
import SideBar from "./Components/Sidebar/SideBar";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
export default function App() {
  return (
    <Router>
      <SideBar/>
      <Switch>
          <Route path="/" exact component={DashboardFinance}/>
          <Route path="/DashboardEmployees" exact component={DashboardEmployees}/>

      </Switch>

    </Router>

  );
}
