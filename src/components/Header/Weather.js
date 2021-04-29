import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    try {
      const fetchWeather = async () => {
        const uri = 'http://api.weatherstack.com/current';
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const res = await axios.get(uri, {
          params: {
            query: 'Helsinki',
            access_key: apiKey,
          },
        });

        const weather = await res.data.current;

        const { cloudcover, feelslike, temperature } = weather;
        setWeather(
          `${cloudcover}% cloudy, feels like ${feelslike} C degree and the temperature is ${temperature} C degree`
        );
      };
      fetchWeather();
    } catch (error) {
      console.log('Error from weather: ', error);
    }
  }, []);

  const renderedResults = weather ? (
    <div>Current Helsinki Weather is {weather}</div>
  ) : (
    <div>Loading</div>
  );

  return renderedResults;
};

export default Weather;
