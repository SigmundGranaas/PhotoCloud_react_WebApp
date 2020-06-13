import React, { Component } from "react";
import "./Signup.css";
import { Link, Router, withRouter } from "react-router-dom";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Submit: "",
      Username:"",
      Password:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  
  handleSubmit() {
    console.log()
    this.props.location.state.onSubmit(true);
  }

  handleUsername(event) {
    this.setState({
      text: event.target.value,
    });
  }
  handlePassword(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div className="signBox" >
        <h1 className="h1">Login </h1>
        <form className="form" onSubmit={() => this.handleSubmit()}>
          <label className="label">
            Username
          </label>
          <input type="text" name="Username" onChange={this.handleUsername} placeholder="Type your username" className="input" />
          <label className="label">
            Password
          </label>
          <input type="password" name="Password" onChange={this.handlePassword} autoComplete="false" placeholder="Type your password"  className="input"/>
          <input type="submit" className="submit" value="Login" />
        </form>
        <div className="notMember">
          Not a user?
          <Link to="/signup">
            Sign up!
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Signin);
