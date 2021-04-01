# Context

Context API is a way to communicate components through a Provider and a Conmidor for parent-child, child-child or other types of communication.

to start with, the first thing to do is to create a new context with `createContext`

```js
import { createContext } from "react";

/**
 * createContext gives a default value
 * in this case give null
 */
const MyContext = createContext(null);
```

this context does not return an Object with two Components a Provider and a Consumer, in order to use the context we return wrap the components we want the context to use in a Provider

```jsx
import { createContext } from "react";

export const MyContext = createContext(null);

/**
 * the Provider component has a prop value
 * which is the initial value it will have
 */
const App = () => {
  return (
    <MyContext.Provider value={{ text: "React 🎯" }}>
      {/* ... */}
    </MyContext.Provider>
  );
};
```

and to be able to use it what we do is to export the context object in order to use the Consumer component

```jsx
import { MyContext } from "App.js";

/**
 * inside the body of the Consumer
 * we will put a function that will be able
 * to bring the value given in the Provider
 * and render it in what that function returns.
 */

const OtherComponent = () => {
  return (
    <>
      <MyContext.Consumer>
        {(value) => <h1>{value.text}</h1>}
      </MyContext.Consumer>
    </>
  );
};
```

also another way to use the context value is with hooks

```js
import { useContext } from "react";
import { MyContext } from "App.js";

/**
 * in this case we will import from react
 * the hook of useContext where we will pass
 * the instance of the context and
 * it will return the value directly to us
 */
const OtherComponent = () => {
  const value = useContext(MyContext);

  return <>{(value) => <h1>{value.text}</h1>}</>;
};
```

Yeap, so easy for all
