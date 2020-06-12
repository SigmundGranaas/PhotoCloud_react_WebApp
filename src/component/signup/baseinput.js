import React, { Component } from "react";
import "./Signup.css";

class BaseInput extends Component {
  render() {
    return (
      <div>
        <input
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default BaseInput;
