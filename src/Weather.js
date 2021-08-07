import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";
import "./WeatherForecast.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.name,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleNewCity(event) {
        setCity(event.target.value);
    }

    function search() {
        const apiKey = "470498c2d4e432b94c48ce9eb7ed132a";
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiURL).then(handleResponse);
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <WeatherDetails details={weatherData} />
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="city" className="form-control" placeholder="Type a city..."
                                onChange={handleNewCity} />
                        </div>
                        <div className="col-3">
                            <button type="submit" className="btn btn-primary mb-2">Search</button>
                        </div>
                    </div>
                </form>
                <WeatherForecast />
            </div >
        );
    }
    else {
        search();

        return (
            <Loader type="ThreeDots"
                color="black"
                height={80}
                width={80} />
        );
    }

}
