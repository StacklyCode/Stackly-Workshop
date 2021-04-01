import { Component } from "react";
import logo from "./logo.png";

export default function App() {
  return (
    <div>
      <img src={logo} alt="" />
      <Title text="JSX In runtime" />
    </div>
  );
}

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
