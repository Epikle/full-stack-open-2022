import { useEffect, useState } from 'react';
import Country from './Country';

const CountryList = ({ countries, search }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  const countrySetBtnHandler = (countryName) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(countryName.toLowerCase())
      )
    );
  };

  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (filteredCountries.length === 1) {
    return <Country data={filteredCountries[0]} />;
  }

  return (
    <ul>
      {filteredCountries.map((data) => (
        <li key={data.name.common}>
          {data.name.common}{' '}
          <button onClick={countrySetBtnHandler.bind(null, data.name.common)}>
            show
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
