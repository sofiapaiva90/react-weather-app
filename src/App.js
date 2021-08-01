import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> <i class="fa fa-thumb-tack" aria-hidden="true"></i>Lisbon </h1>
        <h3>Sunday, July 11th 2021, 17h51</h3>
        <div className="row">
          <div className="col-9">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather icon" />
            <p className="degrees">24° <span>C</span>|<span>F</span> </p>
          </div>
          <div className="col-3">
            <p>Humidity: 0%</p>
            <p>Wind: 2 Km/h</p>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-9">
              <input type="city" className="form-control" placeholder="Type a city..." />
            </div>
            <div className="col-3">
              <button type="submit" class="btn btn-primary mb-2">Search</button>
            </div>
          </div>
        </form>
        <p>
          <a
            href="https://github.com/sofiapaiva90/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >Open-source code </a>by Sofia Paiva
        </p>
      </div>
    </div>
  );
}
