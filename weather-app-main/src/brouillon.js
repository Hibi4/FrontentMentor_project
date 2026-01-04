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

*/ 