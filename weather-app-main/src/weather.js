import React, { useState, useEffect, useRef } from 'react'
import logo from './assets/images/logo.svg'
// import large from './assets/images/bg-today-large.svg'
import units from './assets/images/icon-units.svg'
// import rain from './assets/images/icon-rain.webp'
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
    // const [currentDay, setCurrentDay] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('celsius'); // par défaut Celsius
    const UNIT_OPTIONS = ['temperature', 'wind'];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('celsius'); // valeur sélectionnée dans le menu déroulant

    // 1. Create a ref to reference the dropdown container
    const dropdownRef = useRef(null);

    // 2. Add an effect to listen for clicks on the document
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click happened OUTSIDE the dropdown ref
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // 3. Cleanup: Unbind the event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);


    const getWeatherDescription = (code) => {
        const c = code != null ? Number(code) : 0;
        if (isNaN(c)) return iconPartlyCloudy;

        if (c === 0) return iconSunny;
        if (c === 1 || c === 2) return iconPartlyCloudy;
        if (c === 3) return iconOvercast;
        if (c === 45 || c === 48) return iconFog;
        if (c >= 51 && c <= 57) return iconDrizzle;
        if (c >= 61 && c <= 67) return iconRain;
        if (c >= 71 && c <= 77) return iconSnow;
        if (c >= 80 && c <= 82) return iconRain;
        if (c >= 85 && c <= 86) return iconSnow;
        if (c >= 95 && c <= 99) return iconStorm;

        return iconPartlyCloudy || 'Unknown';
    }

    const convertTemp = (temp) => {
        if (temp === null || temp === undefined) return temp;
        if (selectedOption === 'fahrenheit') {
            return Math.round((temp * 9) / 5 + 32);
        }
        // default celsius
        return Math.round(temp);
    };

    const convertWind = (wind) => {
        if (wind === null || wind === undefined) return wind;
        if (selectedOption === 'mph') {
            return Math.round(wind / 1.609);
        }
        // default km/h
        return Math.round(wind);
    };

    const tempUnitLabel = selectedOption === 'fahrenheit' ? 'F' : 'C';
    const windUnitLabel = selectedOption === 'mph' ? 'mph' : 'km/h';
    const precipitationUnitLabel = selectedOption === 'millimeters' ? 'mm' : 'mm';

    // Fonction pour extraire le jour de la semaine à partir d'une date
    const getDayName = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString + 'T00:00:00');
        return date.toLocaleDateString('en-US', { weekday: 'long' }); // Ex: "Monday", "Tuesday"
    };

    // Fonction pour générer les 5 prochains jours à partir d'une date
    const getNext5Days = (startDate) => {
        if (!startDate) return [];
        const days = [];
        const start = new Date(startDate + 'T00:00:00');

        for (let i = 0; i < 5; i++) {
            const nextDate = new Date(start);
            nextDate.setDate(start.getDate() + i);
            const dateString = nextDate.toISOString().split('T')[0];
            days.push({
                date: dateString,
                dayName: getDayName(dateString)
            });
        }

        return days;
    };

    // Fonction pour formater l'heure en format 12h (ex: "3 PM", "4 PM")
    const formatHour = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const hour = date.getHours();
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        return `${displayHour} ${period}`;
    };

    // Fonction pour récupérer les températures des heures suivantes
    const getNextHoursData = (hourlyTimes, hourlyTemperatures, selectedDate = null, count = 8) => {
        if (!hourlyTimes || !hourlyTemperatures || hourlyTimes.length === 0) return [];

        let filteredTimes = hourlyTimes;
        let filteredTemperatures = hourlyTemperatures;

        // Si une date est sélectionnée, filtrer les données pour ce jour
        if (selectedDate) {
            const selectedDateStr = selectedDate.split('T')[0]; // YYYY-MM-DD
            const filteredIndices = [];
            hourlyTimes.forEach((time, index) => {
                if (time) {
                    const [dateStr] = time.split('T');
                    if (dateStr === selectedDateStr) {
                        filteredIndices.push(index);
                    }
                }
            });
            let timesForDay = filteredIndices.map(i => hourlyTimes[i]);
            let tempsForDay = filteredIndices.map(i => hourlyTemperatures[i]);
            // Si le jour sélectionné est aujourd'hui, on commence à partir de l'heure actuelle
            const todayStr = new Date().toISOString().split('T')[0];
            if (selectedDateStr === todayStr) {
                const now = new Date();
                const currentHour = now.getHours();
                const currentMinute = now.getMinutes();
                const startIndexToday = timesForDay.findIndex(time => {
                    const d = new Date(time);
                    const h = d.getHours();
                    // on passe à l'heure suivante si on est déjà bien avancé dans l'heure courante
                    return h > currentHour || (h === currentHour && currentMinute < 30);
                });
                const startIndex = startIndexToday === -1 ? 0 : startIndexToday;
                timesForDay = timesForDay.slice(startIndex);
                tempsForDay = tempsForDay.slice(startIndex);
            }
            filteredTimes = timesForDay;
            filteredTemperatures = tempsForDay;

        } else {
            // Si aucune date sélectionnée, utiliser la logique originale (heures suivantes)
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();
            const startHour = currentMinute >= 30 ? currentHour + 1 : currentHour;

            let startIndex = hourlyTimes.findIndex(time => {
                if (!time) return false;
                const timeDate = new Date(time);
                const timeHour = timeDate.getHours();
                return timeHour > startHour || (timeHour === startHour && currentMinute < 30);
            });

            if (startIndex === -1) startIndex = 1;

            filteredTimes = hourlyTimes.slice(startIndex);
            filteredTemperatures = hourlyTemperatures.slice(startIndex);
        }

        // Récupérer les heures avec leurs températures
        const nextHours = [];
        for (let i = 0; i < count && i < filteredTimes.length; i++) {
            if (filteredTimes[i] && filteredTemperatures[i] !== undefined) {
                nextHours.push({
                    time: filteredTimes[i],
                    temperature: Math.round(filteredTemperatures[i]),
                    formattedTime: formatHour(filteredTimes[i])
                });
            }
        }

        return nextHours;
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!city) return;

        setWeather(null);
        setError(null);

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
            // const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=precipitation,relativehumidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,precipitation,relativehumidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=7`;
            const weatherRes = await fetch(weatherUrl);
            const weatherData = await weatherRes.json();
            // console.log("WeatherData: ", weatherData);

            const currentDate = weatherData.current_weather.time?.split('T')[0];
            const dayName = getDayName(currentDate);
            // setCurrentDay(dayName);
            setSelectedDay(currentDate); // Initialiser avec la date actuelle

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

    {/*
        4. Attach the ref to the main container div 
        <div ref={dropdownRef} className={`custom-select ${isOpen ? 'open' : ''}`}></div>    
    className='weather-container' */}
    return (
        <div className='weather-container'>
            <div className='header'>
                <div><img src={logo} className='' alt="logo" /> </div>
                <div className='units'>
                    <div ref={dropdownRef} className={`custom-select ${isOpen ? 'open' : ''}`}>
                        <img src={units} alt='units' className='units-trigger-icon' /> 
                        <span className='units-span' onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen((prev) => !prev);
                        }}>
                            {selectedOption === 'switch' && 'Switch to Imperial'}
                            {selectedOption === 'celsius' && 'Celsius'}
                            {selectedOption === 'fahrenheit' && 'Fahrenheit'}
                            {selectedOption === 'millimeters' && 'Millimeters (mm)'}
                            {selectedOption === 'kmh' && 'Km/h'}
                            {selectedOption === 'mph' && 'Mph'}
                            {' '}v
                        </span>
                        {/* </div>*/}

                        {/* Bouton qui affiche la valeur actuelle */}
                        {/*<div
                        
                    )} <div className={`custom-select ${isOpen ? 'open' : ''}`}>
*/ }
                        {/* <div ref={dropdownRef} className={`custom-select ${isOpen ? 'open' : ''}`}> */}
                        {/* The visible button  
                        <div className="select-button" onClick={() => setIsOpen(!isOpen)}>
                            
                        </div> */}

                        {/* The dropdown list */}
                        <div className="select-list">
                            <div
                                className={`select-option ${selectedOption === 'switch' ? 'selected' : ''}`}
                                onClick={() => {
                                    setSelectedOption('switch');
                                    setIsOpen(false);
                                }}
                            >
                                <span>Switch to Imperial</span>
                                <span className='checkmark'>{selectedOption === 'switch' ? 'V' : ''}</span>
                            </div>

                            <hr className='custom-hr' />

                            <div className="select-option disabled">Temperature</div>
                            <div
                                className={`select-option ${selectedOption === 'celsius' ? 'selected' : ''}`}
                                onClick={() => {
                                    setSelectedOption('celsius');
                                    setSelectedUnit('celsius');
                                    setIsOpen(false);
                                }}
                            >
                                <span>Celsius</span>
                                <span className='checkmark'>{selectedOption === 'celsius' ? 'V' : ''}</span>
                            </div>
                            <div
                                className={`select-option ${selectedOption === 'fahrenheit' ? 'selected' : ''}`}
                                onClick={() => {
                                    setSelectedOption('fahrenheit');
                                    setSelectedUnit('fahrenheit');
                                    setIsOpen(false);
                                }}
                            >
                                <span>Fahrenheit</span>
                                <span className='checkmark'>{selectedOption === 'fahrenheit' ? 'V' : ''}</span>
                            </div>

                            <hr className='custom-hr' />

                            <div className="select-option disabled">Precipitation</div>
                            <div
                                className={`select-option ${selectedOption === 'millimeters' ? 'selected' : ''}`}
                                onClick={() => {
                                    setSelectedOption('millimeters');
                                    setIsOpen(false);
                                }}
                            >
                                <span>Millimeters(mm)</span>
                                <span className='checkmark'>{selectedOption === 'millimeters' ? 'V' : ''}</span>
                            </div>

                            <hr className='custom-hr' />

                            <div className="select-option disabled">Wind Speed</div>
                            <div
                                className={`select-option ${selectedOption === 'kmh' ? 'selected' : ''}`}
                                onClick={() => {
                                    setSelectedOption('kmh');
                                    setIsOpen(false);
                                }}
                            >
                                <span>Km/h</span>
                                <span className='checkmark'>{selectedOption === 'kmh' ? 'V' : ''}</span>
                            </div>
                            <div
                                className={`select-option ${selectedOption === 'mph' ? 'selected' : ''}`}
                                onClick={() => {
                                    setSelectedOption('mph');
                                    setIsOpen(false);
                                }}
                            >
                                <span>Mph</span>
                                <span className='checkmark'>{selectedOption === 'mph' ? 'V' : ''}</span>
                            </div>
                        </div>
                    </div>
                    {/*<select name="units" className="units-select" id="hr-select">
                        <option value="">Switch to Imperial</option>

                        
                        <optgroup label="Temperature" className="optgroup">
                            <option value="celsius">Celsius</option>
                            <option value="fahraneit">Farhrenheit</option>
                        </optgroup>

                        
                        <optgroup label="Precipitation" className="optgroup">
                            <option value="millimeters">Millimeters(mm)</option>
                        </optgroup>

                        
                        <optgroup label="Wind Speed" className="optgroup">
                            <option value="km/h">Km/h</option>
                            <option value="mph">Mph</option>
                        </optgroup>
                    </select>*/}
                    {/* <select name="units" className="units-select" id="hr-select">
                        <option value="">Switch to Imperial</option>
                        <hr className='hr-units' />
                        <option value="temperature" disabled>Temperature</option>
                        <option value="celsius">Celsius</option>
                        <option value="fahraneit">Farhrenheit</option>
                        <hr className='hr-units' />
                        <option value="precipitation" disabled>Precipitation</option>
                        <option value="millimeters">Millimeters(mm)</option>
                        <hr className='hr-units' />
                        <option value="wind" disabled>Wind Speed</option>
                        <option value="km/h">Km/h</option>
                        <option value="mph">Mph</option>
                    </select>*/}
                </div>
            </div>
            <div className='weather-title'>How is the sky today?</div>
            <form onSubmit={handleSearch}>


                <div className='search-container'>

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
                            {/* <img src={large} className='large-picture' alt="large" />*/}
                            <div className='weather-location'>
                                <p> {weather.city}, {weather.country} </p>
                                <p> {weather.day}, {weather.time} </p>
                            </div>
                            <div className='weather-grade'>
                                <img src={getWeatherDescription(weather.code)} className='rain' alt='rain' /> {/* width: 10rem */}
                                <p>{convertTemp(weather.temp)}°{tempUnitLabel}</p> {/* width: 3rem */}
                                {/* <img src={weather.icon} alt="weather-icon" />*/}
                            </div>
                        </div>
                        <div className='forecast'>
                            <div className='forecast1'>
                                <p>Feels like</p>
                                <p>{convertTemp(weather.apparentTemp)}°{tempUnitLabel}</p>
                            </div>
                            <div className='forecast2'>
                                <p>Humidity</p>
                                <p>{weather.humidity}%</p>
                            </div>
                            <div className='forecast3'>
                                <p>Wind</p>
                                <p>{convertWind(weather.wind)} {windUnitLabel}</p>
                            </div>
                            <div className='forecast4'>
                                <p>Precipitation</p>
                                <p>{weather.prec} {precipitationUnitLabel}</p>
                            </div>
                        </div>
                        {/* Daily forecast */}
                        <div className='daily-forecast'>
                            <div>
                                <h2>Daily forecast</h2>
                            </div>
                            <div className='daily-forecast-item'>
                                {weather.daily && weather.daily.time.slice(0, 7).map((date, index) => {
                                    const max = weather.daily.temperature_2m_max[index];
                                    const min = weather.daily.temperature_2m_min[index];
                                    const code = weather.daily.weathercode[index];
                                    const icon = getWeatherDescription(code);
                                    const dayName = getDayName(date);

                                    return (
                                        <div key={date} className='daily-item'>
                                            <p className='daily-item-dayName'>{dayName} </p>
                                            <img src={icon} className='weather-daily-icon' alt='weather-daily-ico' />
                                            <div className='daily-item-temp'>
                                                <span> {Math.round(max)}° </span>
                                                <span> {Math.round(min)}° </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div></div>
                    </div>
                    {/* Hourly forecast */}
                    <div className='hourly-forecast'>
                        <div className='hourly-title'>
                            <div>
                                <h4>Hourly forecast</h4>
                            </div>
                            <div>
                                <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                                    {weather && getNext5Days(weather.date).map((day, index) => (
                                        <option key={index} value={day.date}>
                                            {day.dayName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            {weather && getNextHoursData(weather.hourlyTimes, weather.hourlyTemperatures, selectedDay, 8).map((hourData, index) => (
                                <div key={index} className='forecast-meteo'>
                                    <div className='hourly-item-left'>
                                        <img src={getWeatherDescription(weather.code)} className='rain' alt='weather-icon' />
                                        <p>{hourData.formattedTime}</p>
                                    </div>
                                    <div className='hourly-item-right'>
                                        <p>{convertTemp(hourData.temperature)}°{tempUnitLabel}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            )}
        </div>
    )
}

export default Weather;