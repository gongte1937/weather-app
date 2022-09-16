import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CityName from "./CityName";
import Weather from "./Weather";
import getWeather from "../../api/getWeather/getWeather";

const Wrapper = styled.div`
  padding: 60px 90px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100vh;
  /* background-color: red; */
`;

const CurrentCity = ({ city, setCity }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  // fetch current weather data
  useEffect(() => {
    getWeather(city).then((res) => {
      // store the response data
      setData(res.data);
      setLoading(false);
    });
  }, [city]);

  // if data has not been fetched then display loading...
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Wrapper>
      <Weather data={data} setData={setData} />
      <CityName data={data} />
      <button onClick={() => setCity("Sydney")}>Debug</button>
    </Wrapper>
  );
};

export default CurrentCity;
