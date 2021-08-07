import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
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