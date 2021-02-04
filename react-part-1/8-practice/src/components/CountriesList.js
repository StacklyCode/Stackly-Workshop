import React, { Component } from "react";
import CountryCard from "./CountriesCard";

export default class CountriesList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { countries, search } = this.props;
    return (
      <section className="country-list">
        {countries
          .filter(
            (country) =>
              country.name
                .trim()
                .toLowerCase()
                .includes(search.trim().toLowerCase()) ||
              country.capital
                .trim()
                .toLowerCase()
                .includes(search.trim().toLowerCase())
          )
          .map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
      </section>
    );
  }
}
