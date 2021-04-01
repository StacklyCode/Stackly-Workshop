# Hooks

Hooks are functions that allow you to manage the life cycle of components and reuse them as Legos.

for this there are some rules to follow ([rules](https://reactjs.org/docs/hooks-rules.html))

## useState

this hook allows you to create a state for your component

```jsx
import { useState } from "react";

/**
 * useState returns an array in which
 * the first position is the getter of the
 * state and the second position is
 * the setter of the state.
 */
const Component = () => {
  /**
   * Here we use descturing
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   */
  const [state, setState] = useState("Hi");

  return state;
};
```

## useContext

useContext returns the value of the context you pass it as parameters

```jsx
import { useContext } from "react";
import CustomContext from "./customContext";

const Component = () => {
  /**
   * useContext returns the value of the
   * context that is passed by parameters
   */
  const value = useContext(CustomContext);

  return value;
};
```

## useRef

useRef allows you to have the reference of a DOM element and also to store values in an immutable way.

```jsx
import { useContext } from "react";

const Component = () => {
  /**
   * useRef get the intial value of reference
   */
  const inputRef = useRef(null);

  const handleSubmit = () => {
    /**
     * to get the value storaged in the
     * ref is with current property
     */
    const inputValue = inputRef.current.value;
  };

  /**
   * for give the value to DOM element
   * to ref is with the special prop ref
   * giving the ref instance
   */
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
    </form>
  );
};
```

## useEffect

useEffect allows you to create effects and observables, with which a basic life cycle can be realized.

```jsx
import { useEffect } from "react";
/**
 * In a componente we can declare
 * as many as we want of useEffect's
 */

const Component = () => {
  /**
   * useEffect recive a callback and dependencies
   * that controll the effect inside the callback
   */
  useEffect(
    () => {
      // effect
    },
    [
      /* deps */
    ]
  );

  //..
};
```

### ComponentDidMount

```js
// Without deps
useEffect(() => {
  // effect
}, []);
```

### ComponentDidUpdate

```js
// With deps
useEffect(() => {
  // effect
}, [text]);
```

### ComponenteWillUnmount

```js
// Inside the return function
useEffect(() => {
  // effect
  return () => {
    // cleanup
  };
}, [text]);
```
