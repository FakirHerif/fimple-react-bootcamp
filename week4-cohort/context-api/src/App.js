import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherContextProvider from './contexts/WeatherContext';
import HomePage from './components/HomePage';
import WeatherDetails from './components/WeatherDetails';

function App() {
  return (
    <Router>
      <WeatherContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:city" element={<WeatherDetails />} />
        </Routes>
      </WeatherContextProvider>
    </Router>
  );
}

export default App;
