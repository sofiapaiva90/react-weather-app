import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherDegrees from "./WeatherDegrees";

export default function WeatherDetails(props) {
    return (
        <div className="WeatherDetails">
            <h1> <i className="fa fa-thumb-tack" aria-hidden="true"></i>{props.details.city} </h1>
            <h4><FormattedDate date={props.details.date} /></h4>
            <div className="row">
                <div className="col-8">
                    <WeatherIcon code={props.details.icon} size={60} />
                    <WeatherDegrees celsius={props.details.temperature} />
                </div >
                <div className="col-4 TempDetails">
                    <span className="humidity"><strong>Humidity:</strong> {props.details.humidity}%</span>
                    <span className="wind"><strong>Wind:</strong> {Math.round(props.details.wind)}Km/h</span>
                </div>
            </div>
        </div>
    );
}