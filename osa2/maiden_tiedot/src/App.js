import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CountryList from './components/CountryList';

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
      setIsLoading(false);
    });
  }, []);

  const countryFindInputHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <React.Fragment>
      {isLoading && <p>Loading...</p>}
      <label htmlFor='country-search'>find countries</label>{' '}
      <input id="country-search" type="text" onChange={countryFindInputHandler} />
      {!isLoading && <CountryList countries={countries} search={search} />}
    </React.Fragment>
  );
}

export default App;
