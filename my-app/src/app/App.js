import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";
import getWeatherByCity from "../api/getWeather/getWeatherByCity";
import getWeatherByCoord from "../api/getWeather/getWeatherByCoord";
import { Switch } from "@mui/material";

const screenWidth = "1024px";

const Container = styled.div`
  background-image: url(https://img.freepik.com/premium-photo/fluffy-white-cloud-blue-sky_1122-11004.jpg?w=740);
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;
const SearchBarContainer = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${screenWidth}) {
    flex-direction: column;
    flex-direction: column-reverse;
    margin-top: 50px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255, 0.8);
    font-weight: bold;
  }
`;

const UnitsSwitch = styled.div`
  margin-left: 190px;
  @media screen and (max-width: ${screenWidth}) {
    margin-top: 20px;
    margin-left: 0px;
  }
`;
const SearchBarBox = styled.div`
  display: flex;
  justify-content: flex-start;
  color: rgb(255 255 255 /40%);
  min-height: 40px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  @media screen and (max-width: ${screenWidth}) {
    width: 250px;

  }
`;
const SearchIcon = styled.button`
  padding: 10px 10px;
  color: rgb(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0);
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
const SearchInput = styled.input`
  /* width: 100%; */
  /* margin-left: 50px; */
  padding-right: 50px;

  font-size: 1rem;
  color: rgb(255 255 255 /40%);
  min-height: 40px;
  border: none;
  background: rgba(0, 0, 0, 0);
  &:focus,
  &:active {
    outline: none;
  }
`;

const App = () => {
  // initialize the city with default Adelaide
  const [city, setCity] = useState("Adelaide");
  const [location, setLocation] = useState("");
  const [data, setData] = useState();
  const [currentLongitude, setCurrentLongitude] = useState();
  const [currentLatitude, setCurrentLatitude] = useState();
  const [units, setUnits] = useState("metric");
  const [loading, setLoading] = useState(true);

  // initialization : fetch current location city name
  useEffect(() => {
    //use geolocation method to get current location coord
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLatitude(position.coords.latitude);
      setCurrentLongitude(position.coords.longitude);
    });
    getWeatherByCoord(currentLatitude, currentLongitude, units)
      .then((res) => {
        // only store the city name
        setCity(res.data.name);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [currentLatitude, currentLongitude]);

  //  fetch the weather data by city name
  useEffect(() => {
    getWeatherByCity(city, units)
      .then((res) => {
        // store the response data
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [city, units]);

  // if data has not been fetched then display loading...
  if (loading) {
    return <div>loading...</div>;
  }

  // swich the units between imperial and metric
  const switchHandler = (e) => {
    e.target.checked ? setUnits("imperial") : setUnits("metric");
  };

  // when press enter in searchbox then get the weather data
  const searchLocation = (e) => {
    if (e.key === "Enter") {
      setCity(location);
    }
  };
  // put the searchBar value to the location state
  const searchHandler = (e) => {
    setLocation(e.target.value);
  };

  return (
    <Container>
      <SearchBarContainer>
        <UnitsSwitch>
          <div>Metric / Imperial</div>
          <Switch color="default" onChange={switchHandler} />
        </UnitsSwitch>

        <SearchBarBox>
          <SearchIcon className="fas fa-search" onClick={(e)=>setCity(location)} />
          <SearchInput
            type="text"
            placeholder="Enter a city"
            onKeyPress={searchLocation}
            onChange={searchHandler}
          />
        </SearchBarBox>
      </SearchBarContainer>

      <CurrentCity data={data} units={units} />
      <Forecast city={city} units={units} />
    </Container>
  );
};

export default App;
