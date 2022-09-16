import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: rgb(255 255 255 /70%);
`;
const Title = styled.p`
  margin: 0;
  text-align: center;
`;

const Value = styled.p`
  margin: 0.25rem 0 0 0;
  text-align: center;
`;

const Meta = ({ title, value }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  );
};

export default Meta;
