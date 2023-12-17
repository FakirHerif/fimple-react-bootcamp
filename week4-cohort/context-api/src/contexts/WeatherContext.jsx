import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Istanbul');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = 'A7DJ2VZ86L5JYYLXU3KCFP97J';
        const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&include=days&key=${apiKey}&content`;
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
  
    fetchWeather(); 
  
  }, [city]);

  return (
    <WeatherContext.Provider value={{ weatherData, city, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
