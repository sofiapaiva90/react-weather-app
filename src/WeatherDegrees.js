import React, { useState } from "react";

export default function WeatherDegrees(props) {
    const [unit, setUnit] = useState('celsius');
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
    }
    if (unit === "celsius") {


        return (
            <span className="WeatherDegrees">
                <div className="degrees">{Math.round(props.celsius)}</div>
                <div className="units">
                    <span className="celsius">°C</span>|<span className="fahrenheit"><a href="/" onClick={showFahrenheit}>F</a></span></div>
            </span >


        )
    } else {
        return (
            <span className="WeatherDegrees">
                <div className="degrees">{Math.round(fahrenheit())}</div>
                <div className="units">
                    <span className="celsius"><a href="/" onClick={showCelsius}>°C</a></span>|<span className="fahrenheit">F</span></div>

            </span>
        )

    }
}