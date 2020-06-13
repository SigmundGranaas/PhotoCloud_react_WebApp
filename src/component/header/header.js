import React, { Fragment, Component } from "react";
import logo from "./logo.svg";
import "./header.css";
import { Link, HashRouter } from "react-router-dom";

class Header extends Component {
  constructor(props){
    super(props)
    this.state={isLoggedIn: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleSubmit = (data) => {
     console.log("po")
      this.setState({
        isLoggedIn: data,
      });
    console.log("logged")
  }

  render() {
    return (
      <div className="Header">
        <Link to="/">
          <img className="logo" src={logo} alt="Whatever"></img>
        </Link>
        <div className="try">
          <Link className="navBarLinks" to="/download">
            Download
          </Link>
          <Link className="navBarLinks" to="/howto">
            Howto
          </Link>
          <a className="navBarLinks" href="https://www.github.com/sigmundgranaas/PhotoCloud_react_WebApp/">
            Source code
          </a>
          <Link className="navBarLinks" to="/signup">
            Sign up
          </Link>
          <Link className="navBarLinks" to={{pathname:"/signin", state:{onSubmit:this.handleSubmit}}}> {/*to={{pathname:"/signin", state:{onSubmit:this.handleSubmit}}} */}
            Sign in
          </Link>
          <Fragment>
            <Link className="navBarLinks" to="/settings">
              settings
            </Link>
          </Fragment>
        </div>
      </div>
    );
  }
}

export default Header;
