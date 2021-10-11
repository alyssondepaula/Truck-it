import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "./pages/appRoutes/Home";
import { MyCars } from "./pages/appRoutes/MyCars";
import { Settings } from "./pages/appRoutes/settings";

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/cars">
            <MyCars />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}