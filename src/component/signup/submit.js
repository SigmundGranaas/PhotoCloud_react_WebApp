import React, { Component } from "react";
import BaseInput from "./baseinput.js";
import "./Signup.css";

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: "",
    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handlesubmit(event) {
    this.setState({
      submit: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <BaseInput
          type="submit"
          value={this.state.submit}
          name={this.props.name}
          onChange={this.handlesubmit}
        />
      </div>
    );
  }
}

export default Submit;
