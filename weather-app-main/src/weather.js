import React, { useState } from 'react'
import logo from './assets/images/logo.svg'
// import large from './assets/images/bg-today-large.svg'
import units from './assets/images/icon-units.svg'
import rain from './assets/images/icon-rain.webp'
import search from './assets/images/icon-search.svg'
import iconSunny from './assets/images/icon-sunny.webp'
import iconDrizzle from './assets/images/icon-drizzle.webp'
import iconRain from './assets/images/icon-rain.webp'
import iconSnow from './assets/images/icon-snow.webp'
import iconStorm from './assets/images/icon-storm.webp'
import iconFog from './assets/images/icon-fog.webp'
import iconOvercast from './assets/images/icon-overcast.webp'
import iconPartlyCloudy from './assets/images/icon-partly-cloudy.webp'
import './weather.css'

function Weather() {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [currentDay, setCurrentDay] = useState('');

    const getWeatherDescription = (code) => {
        const weatherCodes = {
            0 : iconSunny,
            1 : iconDrizzle,
            2 : iconRain,
            3 : iconSnow,
            4 : iconStorm,
            5 : iconFog,
            6 : iconOvercast,
            7 : iconPartlyCloudy,
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
            // const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=precipitation,relativehumidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,precipitation,relativehumidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
            const weatherRes = await fetch(weatherUrl);
            const weatherData = await weatherRes.json();
            console.log("WeatherData: ", weatherData);

            // Extraire le jour de la semaine à partir de la date
            const getDayName = (dateString) => {
                if (!dateString) return '';
                const date = new Date(dateString + 'T00:00:00');
                return date.toLocaleDateString('en-US', { weekday: 'long' }); // Ex: "Monday", "Tuesday"
            };

            const currentDate = weatherData.current_weather.time?.split('T')[0];
            const dayName = getDayName(currentDate);
            setCurrentDay(dayName);

            setWeather({
                city: name,
                country: country,
                temp: weatherData.current_weather.temperature,
                apparentTemp: weatherData.hourly?.apparent_temperature?.[0] || weatherData.current_weather.temperature,
                time: weatherData.current_weather.time?.split('T')[0],
                date: currentDate,
                day: dayName, // Jour de la semaine (ex: "Monday")
                wind: weatherData.current_weather.windspeed,
                code: weatherData.current_weather.weathercode,
                prec: weatherData.hourly?.precipitation?.[0] || 0,
                humidity: weatherData.hourly?.relativehumidity_2m?.[0] || 0,
                daily: weatherData.daily || null,
                minTemp: weatherData.daily?.temperature_2m_min?.[0] || 0,
                maxTemp: weatherData.daily?.temperature_2m_max?.[0] || 0,
                hourlyTimes: weatherData.hourly?.time || [],
                hourlyTemperatures: weatherData.hourly?.temperature_2m || []
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
                            <div className='weather-location'>
                                <p> {weather.city}, {weather.country} </p>
                                <p> {weather.day}, {weather.time} </p>
                            </div>
                            <div className='weather-grade'>
                                <img src={getWeatherDescription(weather.code)} className='rain' alt='rain' /> {/* width: 10rem */ }
                                <p> {weather.temp} °C </p> {/* width: 3rem */ }
                                {/* <img src={weather.icon} alt="weather-icon" />*/ }
                            </div>
                        </div>
                        <div className='forecast'>
                            <div className='forecast1'>
                                <p>Feels like</p>
                                <p>{weather.apparentTemp} °C</p>
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
                    {/* Hourly forecast */}
                    <div className='hourly-forecast'>
                        <div className='hourly-title'>
                            <div>
                                <h4>Hourly forecast</h4>
                            </div>
                            <div>
                                <select>
                                    <option> {currentDay} </option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className='forecast-meteo'>
                                <div className='hourly-item-left'>
                                    <img src={getWeatherDescription(weather.code)} className='rain' alt='rain' />
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