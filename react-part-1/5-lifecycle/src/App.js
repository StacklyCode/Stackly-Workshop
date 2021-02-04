import React, { Component } from "react";

import ClassImage from "./ClassImage";

import image from "./logo.png";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ClassImage image={image} title="Class Component" alt="logo" />
        <h1>React Workshop | Lifecycle</h1>
      </div>
    );
  }
}
