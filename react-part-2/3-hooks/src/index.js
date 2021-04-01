import { render } from "react-dom";
import App from "./App";
import { ContextProvider } from "./Context";

import "./index.css";

const rootElement = document.getElementById("root");

render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  rootElement
);
