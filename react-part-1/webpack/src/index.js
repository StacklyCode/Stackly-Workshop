import * as React from "react";
import { render } from "react-dom";

import img from "./logo.png";

import "./index.css";

const Image = <img src={img} alt="Logo" />;
const Title = <h1>React Workshop | Webpack</h1>;

const rootElement = document.getElementById("root");

render([Image, Title], rootElement);
