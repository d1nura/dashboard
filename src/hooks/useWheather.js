import { useEffect, useState } from "react";
// import axios from "axios";

function useWheather(city, refer) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.weatherbit.io/v2.0/${refer}?city=${city}&units=M&key=4efd7bab75b047488b17eb64eaa2beb2`
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setData(data);
      })
      .catch(err => console.log(err));
  }, [city, refer]);

  return [data, loading];
}

export default useWheather;
