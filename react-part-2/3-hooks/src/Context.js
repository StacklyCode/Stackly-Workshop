import { createContext, useContext, useState } from "react";

export const Context = createContext({ title: "Context" });

export const ContextProvider = (props) => {
  const [title, setTitle] = useState("Hooks 😎");
  const [mode, setMode] = useState("dark");

  const changeMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <Context.Provider value={{ title, changeTitle, changeMode, mode }}>
      {props.children}
    </Context.Provider>
  );
};

export const useMyContext = () => {
  return useContext(Context);
};
