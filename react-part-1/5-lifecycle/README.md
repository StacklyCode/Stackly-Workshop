# Lifecycle

![Lifeclycle](https://i1.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=2)

The life cycle of the components are events that are executed from the creation to its destruction, this includes when a component is updated or has an error, for this we have the following mainly

```jsx
class Components {
  /* constructor */

  componentDidMount() {} // When component was rendered

  componentDidUpdate() {} // When component change state or parent

  componentWillUnmount() {} // When component will destroy!!

  componentDidCatch() {} // When component have and error (used with Error Boundaries)

  /* render */
}
```

these events allow to control the logic of the component and its interactions.
