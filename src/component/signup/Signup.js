import React, { Component } from "react";
import "./Signup.css";
import PasswordInput from "./passwordinput";
import TextInput from "./textinput";
import Submit from "./submit";

class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Create account</h1>
        <form>
          <label>
            Username:
            <TextInput name="Username" />
          </label>
          <label>
            Email:
            <TextInput name="Email" />
          </label>
          <label>
            password:
            <PasswordInput name="Password" />
          </label>
          <Submit name="Submit" />
        </form>
        <p>pipipipip</p>
      </div>
    );
  }
}

export default Signup;
