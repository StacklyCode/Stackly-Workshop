# List & Keys

In React to be able to render the lists, it has a feature that these lists must depend on a unique key that allows to quickly update the elements that are rederized.

```jsx
class Component {
  /* constructor */

  render() {
    return <div>{[1, 2, 3, 4, 5, 6]}</div>;
  }
}
```

this render "1,2,3,4,5" in the web in text node, and if you want make a wrapper for the items you can use [map function](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map), thats return a new array for wrap the item

```jsx
class Component {
  /* constructor */

  render() {
    return (
      <div>
        {[1, 2, 3, 4, 5, 6].map((el) => {
          return <div>{el}</div>;
        })}
      </div>
    );
  }
}
```

in the example we are wrapping the information in div this would become an array of jsx elements like this:

```jsx
<div>
  {[
    <div>1</div>,
    <div>2</div>,
    <div>3</div>,
    <div>4</div>,
    <div>5</div>,
    <div>6</div>,
  ]}
</div>
```

so far it is only rendering the elements of a list, but if you want to update it correctly without reacting to information collision this unique key is created.

```jsx
class Component {
  /* constructor */

  render() {
    return (
      <div>
        {[1, 2, 3, 4, 5, 6].map((el) => {
          return <div key={el}>{el}</div>;
        })}
      </div>
    );
  }
}
```

this unique key is put as a prop in the parent element of the rendering in order to be able to update the information (this props "key" is compatible with all rederizable elements).
