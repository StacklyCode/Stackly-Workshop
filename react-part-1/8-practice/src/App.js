import React, { Component } from "react";
import CountriesList from "./components/CountriesList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      search: "",
    };

    this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((countries) => this.setState({ countries }));
  }

  handleUpdateSearch(evt) {
    this.setState({
      search: evt.target.value,
    });
  }

  render() {
    const {
      state: { countries, search },
      handleUpdateSearch,
    } = this;

    return (
      <main className="app">
        <h1 className="app-title">Countries Searcher</h1>
        <input
          className="app-input"
          type="text"
          value={search}
          onChange={handleUpdateSearch}
        />
        <CountriesList search={search} countries={countries} />
      </main>
    );
  }
}
