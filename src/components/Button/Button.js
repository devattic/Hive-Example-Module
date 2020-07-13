import React, { Component } from "react";

export default class Button extends Component {
  static componentName = "Button";

  render() {
    let text = this.props.text || "Please click";

    return (
      <button name="button" onClick={this.props.onClick}>
        <span>Text from module component: {text}</span>
      </button>
    );
  }
}
