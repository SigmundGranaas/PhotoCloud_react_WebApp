import React, { Component } from "react";
import BaseInput from "./baseinput.js";
import "./Signup.css";

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
    this.handlePassword = this.handlePassword.bind(this);
  }
  handlePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <BaseInput
          type="password"
          value={this.state.password}
          name={this.props.name}
          onChange={this.handlePassword}
        />
      </div>
    );
  }
}

export default PasswordInput;
