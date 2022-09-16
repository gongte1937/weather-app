import React from "react";
import styled from "styled-components";

const color = 'white'

const Wrapper = styled.div`
    margin-top: 2rem;
  padding: 60px 90px;

`;
const Name = styled.h1`
  margin: 0;
  color: ${color};  
  font-size: 2rem;
  font-weight: 500;
  position: relative;

  &:after{
    content: '';
    position: absolute;
    width: 70%;
    border-bottom: 3px solid white;
    bottom: -1rem;
    left: 50%;
    transform: translate(-50%);
  }
`;

const CityName = ({data}) => {
    if(!data){
        return "Loading..."
    }
  return (
    <Wrapper>
      <Name>{data.name}</Name>
    </Wrapper>
  );
};

export default CityName;
