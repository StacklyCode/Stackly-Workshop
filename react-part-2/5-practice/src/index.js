import { render } from "react-dom";
import App from "./App";
import { UserProvider } from "./context/user";

import "./index.css";

const rootElement = document.getElementById("root");

render(
  <UserProvider>
    <App />
  </UserProvider>,
  rootElement
);
