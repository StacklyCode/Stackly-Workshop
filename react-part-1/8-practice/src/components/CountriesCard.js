import React, { Component } from "react";

export default class CountriesCard extends Component {
  render() {
    const { country } = this.props;
    return (
      <li key={country.name} className="country-card">
        <img src={country.flag} alt={`${country.name} flag`} loading="lazy" />
        <div className="coutry-card-body">
          <h4>{country.name}</h4>
          <p>
            <strong>Population: </strong>
            {country.population}
          </p>
          <p>
            <strong>Region: </strong>
            {country.region}
          </p>
          <p>
            <strong>Capital: </strong>
            {country.capital}
          </p>
        </div>
      </li>
    );
  }
}
