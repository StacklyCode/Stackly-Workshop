import * as React from "react";
import { render } from "react-dom";

import img from "./logo.png";

import "./index.css";

const Image = <img src={img} alt="" />;
const Title = <h1>Hello To React</h1>;

const rootElement = document.getElementById("root");

render([Image, Title], rootElement);
