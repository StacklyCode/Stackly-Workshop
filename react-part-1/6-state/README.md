# State

el estado es una forma de actualizar informacion dentro de un componente, este estado se actualiza de forma asincroncrona, ademas es inmutable

```jsx
class Component {
  constructor(props) {
    super(props);
    this.state = {
      /* intial state */
    };
  }
  /* render */
}
```

Moreover, the state is immutable, so a special method is used to change the state following the reactivity rules.

```jsx

class Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
      counter: 0
    };

    this.changeState = this.changeState.bind(this)
    }

    changeState() {
        /*
           this method update
           the counter for 1,
           and the text remains
           the same because no
           change
        */

        this.setState({
            /* new state */
            counter: this.state + 1
        })
    }

  }

  /* render */
}

```

also this method allows you to manage the state and props in a simple way in order to change the state logically

```jsx

class Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
      counter: 0
    };

    this.changeText = this.changeText.bind(this)
    }

    changeText() {
        this.setState((state, props) => ({
            counter: this.state + this.props.count
        }))
    }

  }

  /* render */
}

<Components count={1} />

```
