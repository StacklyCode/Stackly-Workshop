import * as React from "react";
import { render } from "react-dom";

import img from "./logo.png";

import "./index.css";

const Image = React.createElement("img", { src: img, alt: "Logo" });
const Title = React.createElement("h1", null, "React Workshop | JSX");
const Container = React.createElement(
  "div",
  { className: "container" },
  Image,
  Title
);

const ContainerClone = React.cloneElement(Container, { id: "clone" });

const rootElement = document.getElementById("root");

render(ContainerClone, rootElement);
