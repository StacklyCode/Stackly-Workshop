# Configuring React with Webpack

## Basic configuration

To configure webpack, first install the following webpack dependencies:

```bash
    npm install --save-dev webpack webpack-cli
```

and create a configuration file `webpack.config.js`, to start with the configuration, in this file you will put the input, the output and the mode like:

```js
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[chunk].bundle.js",
  },
  mode: "development",
};
```

then to be able to read jsx, styles and files, we will install the respective loaders and set them up

```bash
npm install --save-dev css-loader style-loader file-loader babel-loader @babel/cli @babel/core @babel/preset-env @babel/preset-react
```

and in the configuration file we will be able to loader rules

```js
module.exports = {
  /* previus configuration */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // for jsx
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"], // for css
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"], // for files
      },
    ],
  },
};
```

finally let's install plugins for webpack and your development server

```bash
npm install --save-dev html-webpack-plugin webpack-dev-server
```

and just like the rules, we configure them as follows

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /* previus configuration */
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
  },
};
```

congratulations you have configured react with webpack from 0
