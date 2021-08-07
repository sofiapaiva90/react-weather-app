import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let [charged, setCharged] = useState(false);
    let [forecastInfo, setForecasteInfo] = useState(null);

    useEffect(() => {
        setCharged(false);
    }, [props.coords]);

    function handleResponse(response) {
        setForecasteInfo(response.data.daily);
        setCharged(true);
    }
    if (charged) {
        return (
            <div className="WeatherForecast">
                <h5><i className="fas fa-binoculars"></i>
                    Next 7 days...</h5>
                {forecastInfo.map(function (dailyForecast, index) {
                    if (index > 0) {
                        return (
                            <div key={index}>
                                <WeatherForecastDay day={dailyForecast} />
                                <hr />
                            </div>
                        );
                    } else {
                        return null;

                    }
                })}
            </div>
        );
    }
    else {
        let apiKey = "fd2c0f6911e03a0e86194507602eb0cd";
        let lat = props.coords.lat;
        let lon = props.coords.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}