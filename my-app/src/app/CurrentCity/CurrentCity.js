import React from "react";
import styled from "styled-components";
import CityName from "./CityName";
import Weather from "./Weather";

const Wrapper = styled.div`
  padding: 60px 90px;
  display:  flex;
  /* background-color: red; */
`;
const CurrentCity = () => {
  return (
    <Wrapper>
      <Weather/>
      <CityName />
    </Wrapper>
  );
};

export default CurrentCity;
