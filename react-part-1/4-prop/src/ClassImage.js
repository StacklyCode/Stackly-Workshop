import React, { Component } from "react";

export default class ClassImage extends Component {
  render() {
    const { title, image, alt, isShowed } = this.props;
    return (
      <>
        {isShowed && (
          <>
            <img src={image} alt={alt} />
            <h2>{title}</h2>
          </>
        )}
      </>
    );
  }
}
