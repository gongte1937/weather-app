import React from "react";
import styled from "styled-components";
import WeatherIcon from "../../../components/WeatherIcon/WeatherIcon";

const color = "white";

const screenWidth = "1024px";

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${screenWidth}) {
    justify-content: center;
    align-items: center;
    padding: 60px 90px;
  }
`;
const Name = styled.h1`
  margin: 0;
  color: ${color};
  font-size: 2.5rem;
  font-weight: 500;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  /* &:after{
    content: '';
    position: absolute;
    width: 70%;
    border-bottom: 3px solid white;
    bottom: -1rem;
    left: 50%;
    transform: translate(-50%);
  } */
`;

const Visibility = styled.p`
  text-align: center;
  font-size: 1.5em;
  letter-spacing: 5px;
  color: rgb(255 255 255 /80%);
  margin: 0.25rem 0 0 0;
  @media screen and (min-width:${screenWidth}){
    font-size: 2em;
  }
`;
const StyledWeatherIcon = styled.div`
display: none;
  @media screen and (min-width:${screenWidth}){
    display: flex;
  justify-content: center;
  }
  > img {
    width: 120px;
    height: 120px;
  }
`;

const CityName = ({ data }) => {
  if (!data) {
    return "Loading...";
  }
  return (
    <Wrapper>
      <Name>{data.name}</Name>
      <StyledWeatherIcon>
        <WeatherIcon
          value={data.weather[0].icon}
          description={data.weather[0].description}
        />
      </StyledWeatherIcon>

      <Visibility>{data.weather[0].main}</Visibility>
    </Wrapper>
  );
};

export default CityName;
