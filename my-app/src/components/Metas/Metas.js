import styled from "styled-components";
import Meta from "./components/Meta";

const Container = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 500;
`;
const Divider = styled.div`
  width: 2px;
  background-color: rgb(255 255 255 /80%); ;
`;

const Metas = ({ wind, humidity, units }) => (
  <Container>
    <Meta title="Humidity" value={`${humidity}%`} />
    <Divider />
    {units === "metric" && <Meta title="Wind" value={`${wind} m/s`} />}
    {units === "imperial" && <Meta title="Wind" value={`${wind} mi/h`} />}
  </Container>
);

export default Metas;
