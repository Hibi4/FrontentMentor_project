import React from 'react'
import logo from './assets/images/logo.svg'
import large from './assets/images/bg-today-large.svg'
import units from './assets/images/icon-units.svg'
import rain from './assets/images/icon-rain.webp'
import search from './assets/images/icon-search.svg'
import './weather.css'

function Weather() {
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
            <div className='search-container'>
                <div className='search-input-wrapper'>
                    <img src={search} className='search-icon' alt='search-icon' />
                    <input type='text' className='search-input' placeholder='Search for a place...' />
                </div>
                <button className='search-button'>Search</button>
            </div>
            <div className='container'>
                <div>
                    <div>
                        <img src={large} className='large-picture' alt="large" />
                    </div>
                    <div className='forecast'>
                        <div className='forecast1'></div>
                        <div className='forecast2'></div>
                        <div className='forecast3'></div>
                        <div className='forecast4'></div>
                    </div>
                    {/* Daily forecast */ }
                    <div className='daily-forecast'>
                        <div>
                            <h2>Daily forecast</h2>
                        </div>
                        <div className='daily-forecast-item'>
                            <div className='daily-item'></div>
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
            
        </div>
    )
}

export default Weather;