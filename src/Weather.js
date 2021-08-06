import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.name,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            date: "Sunday, July 11th 2021, 17h51",

        });
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <h1> <i className="fa fa-thumb-tack" aria-hidden="true"></i>{weatherData.city} </h1>
                <h4>{weatherData.date}</h4>
                <div className="row">
                    <div className="col-8">
                        <img src={weatherData.iconUrl} alt="weather icon" />
                        <div className="degrees">{Math.round(weatherData.temperature)}</div><div className="units"><span className="celsius">°C</span>|<span className="fahrenheit">F</span></div>
                    </div>
                    <div className="col-4 TempDetails">
                        <span className="humidity"><strong>Humidity:</strong> {weatherData.humidity}%</span>
                        <span className="wind"><strong>Wind:</strong> {Math.round(weatherData.wind)}Km/h</span>
                    </div>
                </div>
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="city" className="form-control" placeholder="Type a city..." autoComplete="off" />
                        </div>
                        <div className="col-3">
                            <button type="submit" className="btn btn-primary mb-2">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
    else {
        const apiKey = "470498c2d4e432b94c48ce9eb7ed132a";
        let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiURL).then(handleResponse);

        return "Loading...";
    }

}
