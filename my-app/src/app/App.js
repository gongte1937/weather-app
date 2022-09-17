import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";
import getWeatherByCity from "../api/getWeather/getWeatherByCity";
import getWeatherByCoord from "../api/getWeather/getWeatherByCoord";
import { Switch } from '@mui/material';

const Container = styled.div`
  background-image: url(https://img.freepik.com/premium-photo/fluffy-white-cloud-blue-sky_1122-11004.jpg?w=740);
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SearchBarContainer = styled.div`
  width: 100vh;
  display: flex;
  justify-content: space-around;

  >div{
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255, 0.8);
    font-weight: bold;
  }
`;

const UnitsSwitch = styled.div`


`
const SearchBar = styled.div`
position: relative;
`
const SearchIcon = styled.button`
  position: absolute;
  right: 80px;
  padding: 10px 10px;
  color: rgb(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.0);
  border: none;
  /* border-radius: 6px; */
  outline: none;
`;
const SearchInput = styled.input`
  /* width: 100%; */
  /* margin-left: 50px; */
  padding: 0px 50px;
  position: absolute;
  right: -150px;
  font-size: 1rem;
  color: rgb(255 255 255 /40%);
  min-height: 40px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  &:focus,
  &:active {
    outline: none;
  }
`;

const App = () => {
  // initialize the city
  const [city, setCity] = useState("Adelaide");
  const [location, setLocation] = useState("Adelaide");
  const [data, setData] = useState();
  const [currentLongitude, setCurrentLongitude] = useState();
  const [currentLatitude, setCurrentLatitude] = useState();
  const [units, setUnits] = useState("metric");
  const [loading, setLoading] = useState(true);


  const switchHandler =(e)=>{
    e.target.checked? setUnits("imperial") :setUnits("metric")
  }


  // fetch current location weather data
  useEffect(() => {
    //use geolocation method to get current location coord
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLatitude(position.coords.latitude);
      setCurrentLongitude(position.coords.longitude);
    });
    getWeatherByCoord(currentLatitude, currentLongitude,units)
      .then((res) => {
        // store the response data
        setData(res.data);
        // console.log("data",data.name)
        // setCity(data.name)
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [currentLongitude, currentLatitude,units]);

  // if data has not been fetched then display loading...
  if (loading) {
    return <div>loading...</div>;
  }
  // when press enter in searchbox then get the weather data
  const searchLocation = (e) => {
    if (e.key === "Enter") {
      setCity(location);
      getWeatherByCity(city,units)
        .then((res) => {
          // store the response data
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  };
  const searchHandler = (e) => {
    setLocation(e.target.value);
  };



  return (
    <Container>
      <SearchBarContainer>
        <UnitsSwitch>
        <div>Metric / Imperial</div>
        <Switch
          color="default"
          onChange={switchHandler}
        />
        </UnitsSwitch>

        <SearchBar>
        <SearchIcon className="fas fa-search" />
        <SearchInput
          type="text"
          placeholder="Enter a city"
          onKeyPress={searchLocation}
          onChange={searchHandler}
        />
        </SearchBar>

      </SearchBarContainer>

      <CurrentCity data={data} city={city} setCity={setCity} units={units} />
      <Forecast city={city} units={units} />
    </Container>
  );
};

export default App;
