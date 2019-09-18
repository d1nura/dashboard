import React from "react";
import useWheather from "../hooks/useWheather";

function DailyWheather({ city }) {
  const [data, loading] = useWheather(city, "forecast/daily");

  const results = () => {
    let monthArr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    return (
      <React.Fragment>
        {data.data.map((item, index) => {
          return (
            <div id="cast16" key={index}>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                alt="clouds"
              />
              <p>{item.temp}&deg;C</p>
              <h5>
                {monthArr[parseInt(item.valid_date.split("-")[1]) - 1]} &nbsp;
                {item.valid_date.split("-")[2]}
              </h5>
            </div>
          );
        })}
      </React.Fragment>
    );
  };

  if (data && !loading) {
    console.log(data.data);
    return results();
  } else {
    return <p>Loading daily...</p>;
  }
}

export default DailyWheather;
