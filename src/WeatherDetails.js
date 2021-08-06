import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDetails(props) {
    return (
        <div className="WeatherDeatils">
            <h1> <i className="fa fa-thumb-tack" aria-hidden="true"></i>{props.details.city} </h1>
            <h4><FormattedDate date={props.details.date} /></h4>
            <div className="row">
                <div className="col-8">
                    <WeatherIcon code={props.details.icon} />
                    <div className="degrees">{Math.round(props.details.temperature)}</div><div className="units"><span className="celsius">°C</span>|<span className="fahrenheit">F</span></div>
                </div>
                <div className="col-4 TempDetails">
                    <span className="humidity"><strong>Humidity:</strong> {props.details.humidity}%</span>
                    <span className="wind"><strong>Wind:</strong> {Math.round(props.details.wind)}Km/h</span>
                </div>
            </div>
        </div>
    );
}