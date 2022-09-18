import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getForecast from "../../api/getWeather/getForecast";
import DailyWeather from "./DailyWeather";
import { getDay } from "date-fns";


const screenWidth = "1024px";

const Layout = styled.div`
  padding: 25px 50px;
  margin-top: 1rem;
  display: flex;
  border-top: 3px solid white;
  color: white;
  /* flex-direction: column; */
  overflow-y: auto;
  @media screen and (max-width:${screenWidth}){
    
  }
`;

const Forecast = ({ city,units }) => {
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(true);
  const Days = ["SUN", "MON", "TUS", "WED", "THU", "Fri", "SAT"];


  // get forcast data
  useEffect(() => {
    getForecast(city,units)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [city,units]);

  if (Loading) {
    return <div>Loading...</div>;
  }

  // get the 5 days data with with time 00:00:00
  const forecast = data.data.list.filter(({ dt_txt }) =>
    dt_txt.endsWith("00:00:00")
  );
  // console.log("forecast", forcast);
  return (
    <Layout>
      {forecast.map(({ dt, main: { temp }, weather }) => {
        // use getDay method from date-fns to calculate the day
        return (
          <DailyWeather
            key={dt}
            day={Days[getDay(dt * 1000)]}
            temperature={temp}
            weather={weather}
          />
        );
      })}
    </Layout>
  );
};

export default Forecast;
