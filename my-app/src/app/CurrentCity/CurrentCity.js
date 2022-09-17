import React from "react";
import styled from "styled-components";
import CityName from "./CityName";
import Weather from "./Weather";


const Wrapper = styled.div`
  padding: 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100vh;

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
