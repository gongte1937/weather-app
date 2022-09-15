import React from 'react';
import styled from "styled-components";
import Temperature from '../../../components/Temperature/Temperature';


const Wrapper = styled.div`
      padding: 60px 90px;
      display: flex;
      flex-direction: column;
`
const Visibility = styled.p`
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 5px;
    margin: 0.25rem 0 0 0;
    color: rgb(255 255 255 /70%);

`

const Weather = ()=>{

    return(
        <Wrapper>
            <Temperature>21</Temperature>
            <Visibility>Clear</Visibility>
        </Wrapper>
    ) 


}


export default Weather