import React, { Component } from "react";
import image from "./logo.png";

const users = [
  { id: 1, name: "Jean" },
  { id: 2, name: "Magic" },
];

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>{[1, 2, 3, 4, 5]}</ul>
        <ul>{[1, 2, 3, 4, 5].map((el) => el)}</ul>
        <ul>
          {[1, 2, 3, 4, 5].map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <ul>
          {[
            <li ley={1}>1</li>,
            <li ley={2}>2</li>,
            <li ley={5}>3</li>,
            <li ley={6}>4</li>,
            <li ley={7}>5</li>,
          ]}
        </ul>
        <ul>
          {users.map((el) => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
        <img src={image} alt="logo" />
        <h1>React Workshop | List & Keys</h1>
      </div>
    );
  }
}
