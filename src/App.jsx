import React from 'react';
import Home from "./components/Home";
import Order from "./components/Order";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/order">
          <Order /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App
