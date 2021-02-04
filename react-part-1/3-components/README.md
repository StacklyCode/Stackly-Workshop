# Components

The methodology is a way in which you can easily reuse user interfaces, plus it has independent logic in each component.

In "react" there are several ways of declaring components which allow you to have a flexible flow.

The main components are

- Class Components: has greater control over the component's logic, especially in its life cycle.

  ```jsx
  class Component extends React.Component {
    /* Other Methods */

    render() {
      return; /* JSX */
    }
  }
  ```

- Funcional Components: can be used to display information in a static way, although with hooks, it is given a logic similar to that of class components.

  ```jsx
  function Component() {
    /* Hooks */

    return; /* JSX */
  }
  ```
