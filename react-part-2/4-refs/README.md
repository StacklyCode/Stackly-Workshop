# Refs

references allow you to get the value of a DOM element or to store a value immutably

and there are 3 ways to create these references

## useRef or createRef

with this way we use function that recived the intial value in the both cases and return a ref for use

```jsx
import { useRef } from "react";

const Component = () => {
  const myRef = useRef(null);
  // ...
};
```

```jsx
import { createRef, Component } from "react";

class Comp extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef(null);
  }

  // ...
}
```

## Ref to Component

this form is to be able to pass a ref from a parent component to a child component of type function and class

### To Function

```jsx
import { useRef } from "react";

const Component = () => {
  const myRef = useRef(null);

  return <OtherComponent ref={myRef}>
};
```

```jsx
import { forwardRef } from "react";

/**
 * forwardRef is a HOC that give react
 * for pass ref to function components
 * @see reactjs.org/docs/higher-order-components.html
 * @see reactjs.org/docs/forwarding-refs.html
 */

const OtherComponent = forwardRef((props, ref) => {
    return <input ref={ref}>
});
```

### To Class

```js
import { useRef } from "react";

const Component = () => {
  const myRef = useRef(null);
  return <OtherComponent ref={myRef} />;
};
```

```js
import { Component } from "react";
import { withRef } from "./withRef";

class Comp extends Component {
  // ...

  /**
   * we use innerRef because don't detect with prop
   * ref and also we going to using HOC
   * for resolve this
   */
  render() {
    return <input ref={this.props.innerRef} />;
  }
}
```

```js
import { Component } from "react";

class OtherComponent extends Component {
  // ...

  /**
   * we use innerRef because don't detect with prop
   * ref and also we going to using HOC
   * for resolve this
   * @see reactjs.org/docs/higher-order-components.html
   */
  render() {
    return <input ref={this.props.innerRef} />;
  }
}

export default withRef(OtherComponent);
```

```jsx
import { forwardRef } from "react";

export const withRef = (Component) => forwardRef((props, ref) => {
    return <Component {...props} innerRef={ref} />
  })
};
```

## Callback (deprecated)

```js
import { Component } from "react";
class Comp extends Component {
  constructor(props) {
    super(props);
    this.myRef = null;
  }

  render() {
    return <input ref={(ref) => (this.myRef = ref)} />;
  }
}
```
