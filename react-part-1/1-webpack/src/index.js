import * as React from "react";
import { render } from "react-dom";

import img from "./logo.png";

import "./index.css";

const Image = React.createElement("img", { src: img, alt: "logo" });
const Title = React.createElement("h1", null, "React Workshop | Webpack");

const rootElement = document.getElementById("root");

render([Image, Title], rootElement);
