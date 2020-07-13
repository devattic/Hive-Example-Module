import React, { Component } from "react";

export default class ModuleRoute extends Component {
  static componentName = ModuleRoute.name;

  render() {
    return <h1>This route is provided by a module.</h1>;
  }
}