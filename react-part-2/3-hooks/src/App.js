import { useContext, useEffect, useRef } from "react";
import { Context } from ".";
import { useMyContext } from "./Context";
import logo from "./logo.png";

export default function App() {
  const titleRef = useRef(null);
  const { title, changeTitle, changeMode, mode } = useMyContext();

  useEffect(() => {
    const interval = setInterval(() => {
      changeTitle("🧡");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [title]);

  return (
    <div>
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
        placeholder="Controlable Inpute"
        onChange={(event) => changeTitle(event.target.value)}
      />
      <input
        type="text"
        value={title}
        placeholder="Uncontrolable Input"
        onChange={() => changeTitle(titleRef.current.value)}
        ref={titleRef}
      />
    </div>
  );
}

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};
