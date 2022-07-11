import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Country } from './components/Country';

export default function App() {
  const [country, setCountry] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [countriesFilter, setCountriesFilter] = useState([]);
  const [showCountry, setShowCountry] = useState({});

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setAllCountries(response.data))
  }, []);

  useEffect(() => {
    setShowCountry(countriesFilter.length === 1 ? { ...countriesFilter[0] } : {});
  }, [countriesFilter]);
  
  const searchCountry = (event) => {
    setCountry(event.target.value);
    setCountriesFilter(allCountries.filter((country) => country.name.official.toLowerCase().search(event.target.value.toLowerCase()) !== -1));
  }  
  
  const showCountries = () => {
    if (countriesFilter.length <= 1) return;

    return countriesFilter.map((country) => (
      <div key={country.name.official}>
        {country.name.official}
        <button onClick={() => setShowCountry(country)}>show</button>
      </div>
    ));
  };

  return (
    <>
      <p>
        find countries{" "}
        <input value={country} name="country" onChange={searchCountry} />
      </p>

      {
        countriesFilter.length > 10 
          ? <p>Too many matches, specify another filter</p>
          : showCountries()
      }

      { 
        showCountry.name && <Country data={showCountry} />
      }
    </>
  );
};