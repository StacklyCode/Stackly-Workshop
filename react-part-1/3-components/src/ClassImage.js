import React, { Component } from "react";
import image from "./logo.png";

export default class ClassImage extends Component {
  render() {
    return (
      <>
        <img src={image} alt="logo" />
        <h2>Class Component</h2>
      </>
    );
  }
}
