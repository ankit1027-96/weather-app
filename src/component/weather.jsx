import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

const Weather = ({ data }) => {
  const icon = data.main;
  console.log(icon);

  var weatherIcon = null;

  if (icon === "Thunderstorm") {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (icon === "Drizzle") {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (icon === "Rain") {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (icon === "Snow") {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (icon === "Clear") {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (icon === "Clouds") {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="tempBar col-4">
        <div className="row">
          <div className="icon">{weatherIcon}</div>
          <div>
            <h2>{`${data.temp}°`}</h2>
            <h4>{data.description}</h4>
          </div>
        </div>
      </div>
      <div className="detailBar col-4">
        <div className="row">
          <div className="col-3">
            <div>
              <h4>{`${data.highestTemp}°`}</h4>
              <p>High</p>
            </div>
            <div>
              <h4>{`${data.lowestTemp}°`}</h4>
              <p>Low</p>
            </div>
          </div>
          <div className="col-3">
            <div>
              <h4>
                {`${data.wind}`}
                <p className="wind">m/s</p>
              </h4>
              <p>Wind</p>
            </div>
            <div>
              <h4>20%</h4>
              <p>Rain</p>
            </div>
          </div>
          <div className="col-3">
            <div>
              <h4>05:35</h4>
              <p>Sunrise</p>
            </div>
            <div>
              <h4>18:59</h4>
              <p>Sunset</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
