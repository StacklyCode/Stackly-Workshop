# Props

They are the contraction of properties, this allows you to give inputs to the components in order to display information (like HTMl attributes) or change the logic of the components, the props are simply objects.

```jsx
class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return <h1>{title}</h1>;
  }
}

function SubTitle(props) {
  const { title } = props;

  return <h2>{title}</h2>;
}
```

### ¡PROPS ARE READ-ONLY!
