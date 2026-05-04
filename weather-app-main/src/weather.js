import React, { useState, useEffect, useRef } from 'react'
import logo from './assets/images/logo.svg'
import units from './assets/images/icon-units.svg'
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
    const [selectedDay, setSelectedDay] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('celsius'); 
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
    }

    // Convert from mm to inch : 1 inch = 1 / 25.4 mm
    const convertPrec = (prec) => {
        if (prec === null || prec === undefined) return prec;
        if (selectedOption === 'inch') {
            return Math.round(prec / 25.4) * 10 / 10; // round to 1 decimal
        }
        // default mm
        return Math.round(prec * 10) / 10; // round to 1 decimal
    };

    const tempUnitLabel = selectedOption === 'fahrenheit' ? 'F' : 'C';
    const windUnitLabel = selectedOption === 'mph' ? 'mph' : 'km/h';
    const precipitationUnitLabel = selectedOption === 'inch' ? 'inch' : 'mm';

    // function to get the day name fom a date string
    const getDayName = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString + 'T00:00:00');
        return date.toLocaleDateString('en-US', { weekday: 'long' }); // Ex: "Monday", "Tuesday"
    };

    // function to generate the next 5 days from a given date te) => {
    function getNext5Days(startDate) {
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

    const getDailyForecastFromSelectedDay = (daily, selectedDate) => {
        if (!daily || !daily.time || daily.time.length === 0) return [];

        const dates = daily.time;
        const startIndex = selectedDate ? dates.indexOf(selectedDate) : 0;
        const forecast = [];

        for (let i = 0; i < dates.length; i++) {
            const index = (startIndex + i) % dates.length;
            forecast.push({
                date: dates[index],
                max: daily.temperature_2m_max?.[index] ?? 0,
                min: daily.temperature_2m_min?.[index] ?? 0,
                code: daily.weathercode?.[index] ?? 0,
            });
        }

        return forecast;
    };

    // function to format the hour in 12h format (ex: "3 PM", "4 PM")g) => {
    function formatHour(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        const hour = date.getHours();
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        return `${displayHour} ${period}`;
    };

    // function to get the next hours data (time and temperature) based on the selected date (if any) or the current time
    const getNextHoursData = (hourlyTimes, hourlyTemperatures, selectedDate = null, count = 8) => {
        if (!hourlyTimes || !hourlyTemperatures || hourlyTimes.length === 0) return [];

        let filteredTimes = hourlyTimes;
        let filteredTemperatures = hourlyTemperatures;

        // if a date is selected, filter the data for that day 
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
            const todayStr = new Date().toISOString().split('T')[0];
            if (selectedDateStr === todayStr) {
                const now = new Date();
                const currentHour = now.getHours();
                const currentMinute = now.getMinutes();
                const startIndexToday = timesForDay.findIndex(time => {
                    const d = new Date(time);
                    const h = d.getHours();
                    // pass to the next hour if we are already well advanced in the curent hour
                    return h > currentHour || (h === currentHour && currentMinute < 30);
                });
                const startIndex = startIndexToday === -1 ? 0 : startIndexToday;
                timesForDay = timesForDay.slice(startIndex);
                tempsForDay = tempsForDay.slice(startIndex);
            }
            filteredTimes = timesForDay;
            filteredTemperatures = tempsForDay;

        } else {
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

        // Get the hours with their temperatures 


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
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,precipitation,relativehumidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=7`;
            const weatherRes = await fetch(weatherUrl);
            const weatherData = await weatherRes.json();

            const currentDate = weatherData.current_weather.time?.split('T')[0];
            const dayName = getDayName(currentDate);
            setSelectedDay(currentDate);

            setWeather({
                city: name,
                country: country,
                temp: weatherData.current_weather.temperature,
                apparentTemp: weatherData.hourly?.apparent_temperature?.[0] || weatherData.current_weather.temperature,
                time: weatherData.current_weather.time?.split('T')[0],
                date: currentDate,
                day: dayName,
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
                        }}> units v
                        </span>

                        {/* The dropdown list */}
                        <div className="select-list">
                            <div
                                className={`select-option ${selectedOption === 'switch' ? 'selected' : ''}`}
                                onClick={() => {
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
                            <div
                                className={`select-option ${selectedOption === 'inch' ? 'selected' : ''}`}
                                onClick={() => {
                                    setSelectedOption('inch');
                                    setIsOpen(false);
                                }}
                            >
                                <span>inch(in)</span>
                                <span className='checkmark'>{selectedOption === 'inch' ? 'V' : ''}</span>
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
                        <div className='picture-container-mobile'>
                            <div className='weather-location'>
                                <p> {weather.city}, {weather.country} </p>
                                <p> {weather.day}, {weather.time} </p>
                            </div>
                            <div className='weather-grade'>
                                <img src={getWeatherDescription(weather.code)} className='rain' alt='rain' />
                                <p>{convertTemp(weather.temp)}°{tempUnitLabel}</p>
                            </div>
                        </div>
                        <div className='picture-container'>
                            <div className='weather-location'>
                                <p> {weather.city}, {weather.country} </p>
                                <p> {weather.day}, {weather.time} </p>
                            </div>
                            <div className='weather-grade'>
                                <img src={getWeatherDescription(weather.code)} className='rain' alt='rain' />
                                <p>{convertTemp(weather.temp)}°{tempUnitLabel}</p>
                            </div>
                        </div>
                        <div className='forecast'>
                            <div className='weather-forecast'>
                                <p>Feels like</p>
                                <p>{convertTemp(weather.apparentTemp)}°{tempUnitLabel}</p>
                            </div>
                            <div className='weather-forecast'>
                                <p>Humidity</p>
                                <p>{weather.humidity}%</p>
                            </div>
                            <div className='weather-forecast'>
                                <p>Wind</p>
                                <p>{convertWind(weather.wind)} {windUnitLabel}</p>
                            </div>
                            <div className='weather-forecast'>
                                <p>Precipitation</p>
                                <p>{convertPrec(weather.prec)} {precipitationUnitLabel}</p>
                            </div>
                        </div>
                        {/* Daily forecast */}
                        <div className='daily-forecast'>
                            <div>
                                <h2>Daily forecast</h2>
                            </div>
                            <div className='daily-forecast-item'>
                                {weather.daily && getDailyForecastFromSelectedDay(weather.daily, selectedDay).map((day) => {
                                    const icon = getWeatherDescription(day.code);
                                    const dayName = getDayName(day.date);

                                    return (
                                        <div key={day.date} className='daily-item'>
                                            <p className='daily-item-dayName'>{dayName}</p>
                                            <img src={icon} className='weather-daily-icon' alt='weather-daily-ico' />
                                            <div className='daily-item-temp'>
                                                <span>{Math.round(day.max)}°</span>
                                                <span>{Math.round(day.min)}°</span>
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
                                    {weather && getNext5Days(weather.date).map((day) => (
                                        <option key={day.date} value={day.date}>
                                            {day.dayName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            {weather && getNextHoursData(weather.hourlyTimes, weather.hourlyTemperatures, selectedDay, 8).map((hourData) => (
                                <div key={hourData.time} className='forecast-meteo'>
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