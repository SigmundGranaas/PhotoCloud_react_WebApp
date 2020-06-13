import React, { Component } from "react";
import "./Signup.css";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Submit: "",
      Email: "",
      Username:"",
      Password:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleSubmit(event) {
    this.setState({
      Submit: event.target.value,
    });
    console.log("submitted")

  }
  handleUsername(event) {
    this.setState({
      text: event.target.value,
    });
  }
  handleEmail(event) {
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
      <div className="signBox">
        <h1 className="h1">Create account</h1>
        <form className="form" onSubmit={this.handleSubmit} noValidate>
          <label className="label">
            Username:
          </label>
          <input type="text" name="Username" onChange={this.handleUsername} placeholder="Type your username" className="input" />
          <label className="label">
            Email:
          </label>
          <input type="text" name="Email" onChange={this.handleEmail} placeholder="Type your Email" className="input" />
          <label className="label">
            Password:
          </label>
          <input type="password" name="Password" onChange={this.handlePassword} autoComplete="false" placeholder="Type your password" className="input" />
          <input type="submit" className="submit" value="Sign up"/>
        </form>
      </div>
    );
  }
}

export default Signup;
