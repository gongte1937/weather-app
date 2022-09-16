import React, {useState } from "react";
import styled from "styled-components";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";

const Container = styled.div`
  background-image: url(https://i.imgur.com/GhQZhaO.jpg);
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items:  center;
  flex-direction: column;
`;

const App = () => {
  // initialize the city 
  const [city, setCity] = useState("Adelaide")

  return (
    <Container>
      <CurrentCity city={city} setCity={setCity} />
      <Forecast city={city}/>
    </Container>
  );
};

export default App;
