import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const Country = ({ data }) => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data.capitalInfo.latlng[0]}&lon=${data.capitalInfo.latlng[1]}&appid=${process.env.REACT_APP_WEATHER}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
      });
  }, [data.capitalInfo.latlng]);

  return (
    <Fragment>
      <h2>{data.name.common}</h2>
      <p>capital {data.capital[0]}</p>
      <p>area {data.area}</p>
      <p>
        <strong>languages:</strong>
      </p>
      <ul>
        {Object.values(data.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={data.flags.png} alt={data.name.common} />
      {weatherData && (
        <Fragment>
          <h2>Weather in {data.capital[0]}</h2>
          <p>temperature {weatherData.main.temp} Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <p>wind {weatherData.wind.speed} m/s</p>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Country;
