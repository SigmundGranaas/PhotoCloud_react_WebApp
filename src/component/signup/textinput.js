import React, { Component } from "react";
import BaseInput from "./baseinput.js";
import "./Signup.css";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handletext = this.handletext.bind(this);
  }
  handletext(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <BaseInput
          type="text"
          value={this.state.text}
          name={this.props.name}
          onChange={this.handletext}
        />
      </div>
    );
  }
}

export default TextInput;
