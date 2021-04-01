import { Component, createContext } from "react";
import { render } from "react-dom";
import App from "./App";

import "./index.css";

export const Context = createContext({ title: "Context" });

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Context 🤯",
      mode: "dark",
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.setState((state) => ({
      mode: state.mode === "dark" ? "light" : "dark",
    }));
  }

  changeTitle(newTitle) {
    this.setState({
      title: newTitle,
    });
  }

  render() {
    const {
      state: { title, mode },
      changeTitle,
      changeMode,
    } = this;

    return (
      <Context.Provider value={{ title, changeTitle, changeMode, mode }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const rootElement = document.getElementById("root");

render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  rootElement
);
