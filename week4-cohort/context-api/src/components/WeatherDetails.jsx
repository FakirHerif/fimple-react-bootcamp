import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import { Link } from 'react-router-dom';
import '../index.css';

const WeatherDetails = () => {
  const { weatherData } = useContext(WeatherContext);

  const getTurkishDay = (dateString) => {
    const daysInTurkish = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysInTurkish[dayIndex];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
  };

  return (
    <div className="weather-details">
      <h1>Weather Details</h1>
      <Link to="/" className="back-button">Back</Link>
      {weatherData ? (
        <div className="weather-info">
          {weatherData.days.map((day, index) => (
            <div key={index} className="day-weather">
              <p>Date: {formatDate(day.datetime)}</p>
              <p>Day: {getTurkishDay(day.datetime)}</p>
              <p>Max Temp: {day.tempmax}</p>
              <p>Min Temp: {day.tempmin}</p>
              <p>Conditions: {day.conditions}</p>
              {/* Diğer hava durumu bilgileri */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherDetails;
