import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    let apiKey = "470498c2d4e432b94c48ce9eb7ed132a";
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <h5><i className="fas fa-binoculars"></i>
                Next 7 days...</h5>
            <div className="row">
                <div className="col-sm-3">
                    <WeatherIcon code="50n" size={40} />
                </div>
                <div className="col-sm-3 WeekDay">Monday</div>
                <div className="col-sm-3 TempMax">40°C</div>
                <div className="col-sm-3 TempMin">20°C</div>
            </div>
            <hr />
        </div>
    )
}