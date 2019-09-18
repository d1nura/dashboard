import React, { useState, useRef } from "react";
import useWheather from "../hooks/useWheather";
import "../scss/weather.scss";
import DailyWheather from "./DailyWheather";

function Wheather() {
  const [city, setCity] = useState("Badulla");
  const [data, loading] = useWheather(city, "current");
  const ref = useRef();

  const addCity = e => {
    e.target.value !== ""
      ? setTimeout(setCity(e.target.value), 1000)
      : setCity("Badulla");
    console.log(e.target.value);
  };
  const clearCity = () => {
    ref.current.value = "";
  };

  const results = () => {
    let w = data.data[0];
    return (
      <div className="wheather">
        <div id="enterCity">
          <h1>{w.city_name}</h1>
          <div>
            <input
              type="text"
              onChange={addCity}
              placeholder="Enter a city"
              ref={ref}
            ></input>
            <i onClick={clearCity} className="fas fa-backspace"></i>
          </div>
        </div>
        <div id="currentWheather">
          <h3>Today</h3>
          <div id="curWheaImg">
            <img
              src={` https://www.weatherbit.io/static/img/icons/${w.weather.icon}.png`}
              alt="icon"
            ></img>
          </div>
          {/* <div class="centerWheDet"> */}
          <div id="curWheaDetails">
            <h2>{w.temp}&deg;C</h2>
            <p>{w.weather.description}</p>
            <div id="humidity">
              <h5>
                <i className="fas fa-tint"></i>
                {w.rh}%
              </h5>
              <h5>
                <i className="fas fa-wind"></i>
                {w.wind_spd.toFixed(2)} m/s
              </h5>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="day16">
          <DailyWheather city={city} />
        </div>
      </div>
    );
  };
  if (data && !loading) {
    // console.log(data.data[0]);
    return results();
  } else {
    return <p>Loading</p>;
  }
  //   return results();
}

export default React.memo(Wheather);
