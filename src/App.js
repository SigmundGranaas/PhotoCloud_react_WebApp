import React, { Component } from "react";
import "./App.css";
import Hode from "./component/header/header.js";
import Home from "./component/Home/Home.js";
import Signup from "./component/signup/Signup.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <div>
              <Hode />
              <Route path="/" exact component={Home} />
              <Route path="/signup" exact component={Signup} />
              {/*<Route path="/download" exact component={Download} />
              <Route path="/howto" exact component={Howto} />
              <Route path="/settings" exact component={Settings} /> */}
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
