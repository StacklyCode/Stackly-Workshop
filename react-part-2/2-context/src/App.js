import { Component } from "react";
import { Context } from ".";
import logo from "./logo.png";

export default function App() {
  return (
    <div>
      <Context.Consumer>
        {({ title, changeTitle, changeMode, mode }) => (
          <>
            <img src={logo} alt="" />
            <Title text={title} />
            <button
              onClick={() => {
                changeMode();
                document.body.classList.toggle("light");
              }}
            >
              {mode}
            </button>
            <input
              type="text"
              value={title}
              onChange={(event) => changeTitle(event.target.value)}
            />
          </>
        )}
      </Context.Consumer>
    </div>
  );
}

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
