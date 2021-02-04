import React, { Component } from "react";

import ClassImage from "./ClassImage";

import image from "./logo.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  }

  render() {
    const {
      state: { time },
    } = this;
    return (
      <div>
        <ClassImage image={image} title="Class Component" alt="logo" />
        <h1>React Workshop | State</h1>
        <h2>{time}</h2>
      </div>
    );
  }
}
