import React, { Component } from "react";

import ClassImage from "./ClassImage";
import FunctionImage from "./FunctionImage";

import image from "./logo.png";

const props = {
  image,
  title: "Other Function Compónent",
  alt: "Other logo",
};

export default class App extends Component {
  render() {
    debugger;
    return (
      <div>
        <ClassImage image={image} title="Class Component" alt="logo" isShowed />
        <FunctionImage
          image={image}
          title="Function Component "
          alt="logo"
          isShowed
        />
        <FunctionImage {...props} isShowed={true} />

        <h1>React Workshop | Props</h1>
      </div>
    );
  }
}
