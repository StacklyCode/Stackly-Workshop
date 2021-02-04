import React, { Component } from "react";

export default class ClassImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      title: this.props.title,
    };

    this.incremenentCounter = this.incremenentCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  incremenentCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrementCounter() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    const {
      props: { image, alt },
      state: { counter, title },
      incremenentCounter,
      decrementCounter,
      handleChangeTitle,
    } = this;

    return (
      <>
        <>
          <img src={image} alt={alt} />
          <button onClick={incremenentCounter}>Increment</button>
          <button onClick={decrementCounter}>Increment</button>
          <input type="text" value={title} onChange={handleChangeTitle} />
          <h2>
            {title} {counter}
          </h2>
        </>
      </>
    );
  }
}
