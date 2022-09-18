import React from "react";
import styled from "styled-components";
import CityName from "./CityName";
import Weather from "./Weather";

const screenWidth = "1024px";

const Wrapper = styled.div`
  padding: 0px 0px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100vh;
  @media screen and (min-width:${screenWidth}){
    flex-direction: row;
    align-items: flex-start;
  }
`;

const CurrentCity = ({ data ,units}) => {

  return (
    <Wrapper>
      <Weather data={data} units={units} />
      <CityName data={data} />
    </Wrapper>
  );
};

export default CurrentCity;
