import React from "react";

import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <h1> <i class="fa fa-thumb-tack" aria-hidden="true"></i>Lisbon </h1>
            <h4>Sunday, July 11th 2021, 17h51</h4>
            <div className="row">
                <div className="col-8">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather icon" />
                    <div className="degrees">24</div><div className="units"><span className="celsius">°C</span>|<span className="fahrenheit">F</span></div>
                </div>
                <div className="col-4 TempDetails">
                    <span className="humidity"><strong>Humidity:</strong> 0%</span>
                    <span className="wind"><strong>Wind:</strong> 2 Km/h</span>
                </div>
            </div>
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="city" className="form-control" placeholder="Type a city..." autoComplete="off" />
                    </div>
                    <div className="col-3">
                        <button type="submit" class="btn btn-primary mb-2">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
