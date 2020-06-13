import React, { Component } from "react";
import "./App.css";
import Hode from "./component/header/header.js";
import Home from "./component/Home/Home.js";
import Signup from "./component/signup/Signup.js";
import Signin from "./component/signup/signin.js";
import Download from "./component/download/download.js";
import Howto from "./component/download/download.js"
import Settings from "./component/settings/settings.js"

import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state={
    isLoggedIn:false
  }
  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <Hode />
              <Route path="/" exact component={Home} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/signin" exact component={Signin} />
              <Route path="/download" exact component={Download} />
              <Route path="/howto" exact component={Howto} />
              <Route path="/settings" exact component={Settings} />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
