import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    function maxTemp() {
        let temperature = Math.round(props.day.temp.max);
        return `${temperature}°`;
    }

    function minTemp() {
        let temperature = Math.round(props.day.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.day.dt * 1000);
        let day = date.getDay();

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return days[day];
    }

    return (
        <div className="WeatherForecastDay">
            <div className="row">
                <div className="col-sm-3">
                    <WeatherIcon code={props.day.weather[0].icon} size={40} />
                </div>
                <div className="col-sm-3 WeekDay">{day()}</div>
                <div className="col-sm-3 TempMax">{maxTemp()}C</div>
                <div className="col-sm-3 TempMin">{minTemp()}C</div>
            </div>
        </div>
    );
}

