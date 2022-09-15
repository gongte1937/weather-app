import React from "react";
import styled from "styled-components";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";

const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1560017896-a6bf1e2acfb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80);
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items:  center;
  flex-direction: column;
`;

const App = () => {
  return (
    <Container>
      <CurrentCity />
      <Forecast />
    </Container>
  );
};

export default App;
