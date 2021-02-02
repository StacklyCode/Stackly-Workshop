# JSX

## What is?

JSX is a markup language similar to HTML for creating interfaces with which js can be used for interactivity.

```jsx
const Element = <h1>JSX</h1>;
```

this expression or markup like HTML is convert with babel to follow function

```jsx
import * as React from "react";

const Element = React.createElement("h1", null, "JSX");
```

`createElement` have three params `"element"`,`props`,`...childs` and after render with `react-dom`
