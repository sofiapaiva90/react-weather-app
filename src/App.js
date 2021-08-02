import React from "react";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
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
