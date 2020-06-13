import React, { Component } from "react";
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
        <button
          type="submit"
          form={this.props.form}
          onChange={this.handlesubmit}
          >
            {this.props.name}
            </button>
      </div>
    );
  }
}

export default Submit;
