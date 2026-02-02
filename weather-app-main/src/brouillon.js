/* 
import React, { useState } from 'react';
import './App.css';

// WMO Weather interpretation map (kept outside component to prevent re-creation)
const weatherCodes = {
  0: { label: "Clear sky", icon: "☀️" },
  1: { label: "Mainly clear", icon: "🌤️" },
  2: { label: "Partly cloudy", icon: "⛅" },
  3: { label: "Overcast", icon: "☁️" },
  45: { label: "Foggy", icon: "🌫️" },
  48: { label: "Depositing rime fog", icon: "🌫️" },
  51: { label: "Light drizzle", icon: "🌧️" },
  53: { label: "Moderate drizzle", icon: "🌧️" },
  55: { label: "Dense drizzle", icon: "🌧️" },
  61: { label: "Slight rain", icon: "🌧️" },
  63: { label: "Moderate rain", icon: "🌧️" },
  65: { label: "Heavy rain", icon: "🌧️" },
  71: { label: "Slight snow", icon: "🌨️" },
  73: { label: "Moderate snow", icon: "🌨️" },
  75: { label: "Heavy snow", icon: "❄️" },
  95: { label: "Thunderstorm", icon: "⛈️" },
  96: { label: "Thunderstorm with hail", icon: "⛈️" },
  99: { label: "Thunderstorm with heavy hail", icon: "⛈️" },
};

function App() {
  const [cityInput, setCityInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!cityInput.trim()) return;

    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      // 1. Geocoding: Get Lat/Lon from City Name
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}&count=1&language=en&format=json`;
      const geoResponse = await fetch(geoUrl);
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found. Please try again.");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // 2. Weather: Get data using Lat/Lon
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
      const weatherResponse = await fetch(weatherUrl);
      const data = await weatherResponse.json();

      // 3. Update State
      const code = data.current_weather.weathercode;
      const weatherInfo = weatherCodes[code] || { label: "Unknown", icon: "❓" };

      setWeatherData({
        city: name,
        country: country,
        temp: Math.round(data.current_weather.temperature),
        description: weatherInfo.label,
        icon: weatherInfo.icon
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2>Weather Check</h2>

        <div className="search-box">
          <input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter city (e.g., Tokyo)"
          />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? "..." : "Search"}
          </button>
        </div>

        {error && <p className="error-msg">{error}</p>}

        {weatherData && (
          <div className="weather-info">
            <h3 className="location">{weatherData.city}, {weatherData.country}</h3>
            <div className="icon">{weatherData.icon}</div>
            <div className="temperature">{weatherData.temp}°C</div>
            <div className="description">{weatherData.description}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

### Version 2 du projet

App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper to interpret WMO weather codes (0, 1, 2, etc.)
  const getWeatherDescription = (code) => {
    const weatherCodes = {
      0: 'Clear sky',
      1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
      45: 'Fog', 48: 'Depositing rime fog',
      51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
      61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
      71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
      80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
      95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Thunderstorm with heavy hail'
    };
    return weatherCodes[code] || 'Unknown';
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      // STEP 1: Geocoding - Get Lat/Lon from City Name
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
      const geoRes = await fetch(geoUrl);
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found. Please try again.");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // STEP 2: Weather - Get current weather using Lat/Lon
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
      const weatherRes = await fetch(weatherUrl);
      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        country: country,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        code: weatherData.current_weather.weathercode
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>🌤️ Meteo App</h1>
        
        <form onSubmit={handleSearch} className="search-box">
          <input
            type="text"
            placeholder="Enter city (e.g., London)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {loading && <p className="loading">Loading weather data...</p>}

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-card">
            <h2>{weather.city}, {weather.country}</h2>
            <div className="temp">{weather.temp}°C</div>
            <div className="desc">
              <span>{getWeatherDescription(weather.code)}</span>
              <span> | Wind: {weather.wind} km/h</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

App.css

body {
  background-color: #f0f2f5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 1.5rem;
}

.search-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.loading {
  color: #666;
  font-style: italic;
}

.error {
  color: #dc3545;
  background: #f8d7da;
  padding: 10px;
  border-radius: 5px;
}

.weather-card {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.temp {
  font-size: 4rem;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
}

.desc {
  color: #666;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  gap: 10px;
}

*/ 