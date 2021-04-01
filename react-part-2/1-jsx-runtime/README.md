# JSX IN RUNTIME Config

## [React Post](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)

If we want to configure **JSX in runtime** we will configure babel to support and transform it, installing the following dependencies

```bash
npm install -D @babel/core @babel/plugin-transform-react-jsx

// or

yarn add -D @babel/core @babel/plugin-transform-react-jsx
```

and in the babelrc file we are going to put the needed configuration

```config
{
  "presets": [
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ]
}
```

finally we are going to remove all the unnecessary imports with

```bash
npx react-codemod update-react-imports
```
