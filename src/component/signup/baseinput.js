import React, { Component } from "react";
import "./Signup.css";

class BaseInput extends Component {

  render() {
    return (
      <div>
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}>
          </input>
      </div>
    );
  }
}

export default BaseInput;
