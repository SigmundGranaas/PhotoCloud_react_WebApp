import React, { Fragment, Component } from "react";
import logo from "./logo.svg";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends Component {
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
          <a className="navBarLinks" href="Github.com/">
            Source code
          </a>
          <Link className="navBarLinks" to="/signup">
            Sign up
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
