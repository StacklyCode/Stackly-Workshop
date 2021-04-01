import { Component, forwardRef, useRef } from "react";
import logo from "./logo.png";

export default function App() {
  const titleRef = useRef("Refs");
  const OtherTitle = withRef(ClassTitle);

  return (
    <div>
      <img src={logo} alt="" />
      <Title ref={titleRef} />
      <OtherTitle ref={titleRef} />
    </div>
  );
}

const Title = forwardRef(({ text }, ref) => {
  return <h1>{text ? text : ref.current}</h1>;
});

class ClassTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props: { text, innerRef },
    } = this;
    return <h1>{text ? text : innerRef.current}</h1>;
  }
}

const withRef = (Component) =>
  forwardRef((props, ref) => {
    return <Component {...props} innerRef={ref} />;
  });
