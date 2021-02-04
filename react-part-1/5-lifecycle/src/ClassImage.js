import React, { Component } from "react";

export default class ClassImage extends Component {
  constructor(props) {
    super(props);

    this.updateComponent = this.updateComponent.bind(this);
  }

  componentDidMount() {
    console.log("Mounted");
    this.forceUpdate();
  }

  componentDidUpdate() {
    console.log("Update");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  componentDidCatch() {
    console.clear();
  }

  updateComponent() {
    this.forceUpdate();
  }

  render() {
    const { title, image, alt } = this.props;

    return (
      <>
        <>
          <img src={image} alt={alt} />
          <button onClick={this.updateComponent}>Update</button>
          <h2>{title}</h2>
        </>
      </>
    );
  }
}
