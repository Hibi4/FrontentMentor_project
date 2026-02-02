import React, { useState } from 'react'
import logo from './assets/images/logo.svg'
import large from './assets/images/bg-today-large.svg'
import units from './assets/images/icon-units.svg'
import rain from './assets/images/icon-rain.webp'
import search from './assets/images/icon-search.svg'
import './weather.css'

function Weather() {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const getWeatherDescription = (code) => {
        const weatherCodes = {
            0 : 'Clear sky',
            1 : 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
            45 : 'Fog', 48 : 'Depositing rime fog',
            51 : 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
            61 : 'Slight rain', 63 : 'Moderate rain', 65: 'Heavy rain',
            71 : 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
            80 : 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
            95 : 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Thunderstorm with heavy hail'
        }

        return weatherCodes[code] || 'Unknown';
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!city) return;

        setWeather(null);
        setError(null);

        try {
            // STEP 1: Geocoding - Get Lat/Lon from City Name
            const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
            const geoRes = await fetch(geoUrl);
            const geoData = await geoRes.json();

            if(!geoData.results || geoData.results.length === 0) {
                throw new Error("City not found. Please try again.");
            }

            const { latitude, longitude, name, country } = geoData.results[0];

            // STEP 2: Weather - Get current weather using Lat/Lon
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=precipitation,relativehumidity_2m`;
            const weatherRes = await fetch(weatherUrl);
            const weatherData = await weatherRes.json();
            console.log("WeatherData: ", weatherData);

            setWeather({
                city: name,
                country: country,
                temp: weatherData.current_weather.temperature,
                time: weatherData.current_weather.time,
                wind: weatherData.current_weather.windspeed,
                code: weatherData.current_weather.weathercode,
                prec: weatherData.hourly?.precipitation?.[0] || 0,
                humidity: weatherData.hourly?.relativehumidity_2m?.[0] || 0
            })
            
    /* 
    

    */ 

        } catch (error) {
            setError(error.message);
        }
    }


    /* 
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
    */ 

    return (
        <div className='weather-container'>
            <div className='header'>
                <div><img src={logo} className='' alt="logo" /> </div>
                <div className='units'>
                    <img src={units} alt='units' /> Units
                    <select name="units" className="units-select" >
                        <option value=""></option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>                
                </div>                
            </div>
            <div className='weather-title'>How is the sky today?</div>
            <form onSubmit={handleSearch}>

            
            <div className='search-container'>
                {
                    /*
                    return (    
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
                    */ 
                }
               
                <div className='search-input-wrapper'>
                    <img src={search} className='search-icon' alt='search-icon' />
                    <input type='text' className='search-input' placeholder='Search for a place...' onChange={(e) => setCity(e.target.value)} />
                </div>
                <button type="submit" className='search-button'>Search</button>
            </div> 
            </form>
            {error && <p className='error'>{error}</p>}

            {weather && (
                <div className='container'>
                    <div>
                        <div className='picture-container'>
                            {/* <img src={large} className='large-picture' alt="large" />*/ }
                            
                        </div>
                        <div className='forecast'>
                            <div className='forecast1'>
                                <p>Feels like</p>
                                <p>{weather.temp} °C</p>
                            </div>
                            <div className='forecast2'>
                                <p>Humidity</p>
                                <p>{weather.humidity}%</p>
                            </div>
                            <div className='forecast3'>
                                <p>Wind</p>
                                <p> {weather.wind} Km/h </p>
                            </div>
                            <div className='forecast4'>
                                <p>Precipitation</p>
                                <p> {weather.prec} mm</p>
                            </div>
                        </div>
                        {/* Daily forecast */}
                        <div className='daily-forecast'>
                            <div>
                                <h2>Daily forecast</h2>
                            </div>
                            <div className='daily-forecast-item'>
                                <div className='daily-item'>

                                </div>
                                <div className='daily-item'></div>
                                <div className='daily-item'></div>
                                <div className='daily-item'></div>
                                <div className='daily-item'></div>
                                <div className='daily-item'></div>
                                <div className='daily-item'></div>
                            </div>
                        </div>
                    </div>
                    <div className='hourly-forecast'>
                        <div className='hourly-title'>
                            <div>
                                <h4>Hourly forecast</h4>
                            </div>
                            <div>
                                <select>
                                    <option>Tuesday</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className='forecast-meteo'>
                                <div className='hourly-item-left'>
                                    <img src={rain} className='rain' alt='rain' />
                                    <p>3 PM</p>
                                </div>
                                <div className='hourly-item-right'>
                                    <p>30°</p>
                                </div>
                            </div>
                            <div className='forecast-meteo'>
                                <div className='hourly-item-left'>
                                    <img src={rain} className='rain' alt='rain' />
                                    <p>3 PM</p>
                                </div>
                                <div className='hourly-item-right'>
                                    <p>30°</p>
                                </div>
                            </div>
                            <div className='forecast-meteo'>
                                <div className='hourly-item-left'>
                                    <img src={rain} className='rain' alt='rain' />
                                    <p>3 PM</p>
                                </div>
                                <div className='hourly-item-right'>
                                    <p>30°</p>
                                </div>
                            </div>
                            <div className='forecast-meteo'>
                                <div className='hourly-item-left'>
                                    <img src={rain} className='rain' alt='rain' />
                                    <p>3 PM</p>
                                </div>
                                <div className='hourly-item-right'>
                                    <p>30°</p>
                                </div>
                            </div>
                            <div className='forecast-meteo'>
                                <div className='hourly-item-left'>
                                    <img src={rain} className='rain' alt='rain' />
                                    <p>3 PM</p>
                                </div>
                                <div className='hourly-item-right'>
                                    <p>30°</p>
                                </div>
                            </div>
                            <div className='forecast-meteo'>
                                <div className='hourly-item-left'>
                                    <img src={rain} className='rain' alt='rain' />
                                    <p>3 PM</p>
                                </div>
                                <div className='hourly-item-right'>
                                    <p>30°</p>
                                </div>
                            </div>
                            <div className='forecast-meteo'>
                                <div className='hourly-item-left'>
                                    <img src={rain} className='rain' alt='rain' />
                                    <p>3 PM</p>
                                </div>
                                <div className='hourly-item-right'>
                                    <p>30°</p>
                                </div>
                            </div>
                            <div className='forecast-meteo'>
                                <div className='hourly-item-left'>
                                    <img src={rain} className='rain' alt='rain' />
                                    <p>3 PM</p>
                                </div>
                                <div className='hourly-item-right'>
                                    <p>30°</p>
                                </div>
                            </div>
                        </div>
            
                    </div>

                </div>
            )}
        </div>
    )
}

export default Weather;