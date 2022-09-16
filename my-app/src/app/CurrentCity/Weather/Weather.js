import styled from "styled-components";
import Temperature from "../../../components/Temperature/Temperature";
import Metas from "../../../components/Metas/Metas";

const Wrapper = styled.div`
  padding: 60px 90px;
  display: flex;
  flex-direction: column;
`;

const HeadingTemperature = styled.p`
  text-align: center;
  font-size: 5rem;
  color: white;
  margin: 0;
`;
const Visibility = styled.p`
  text-align: center;
  font-size: 2em;
  letter-spacing: 5px;
  color: rgb(255 255 255 /70%);
  margin: 0.25rem 0 0 0;
`;

const Weather = ({ data, setData }) => {
  // fetch wether data from api

  return (
    <Wrapper>
      <HeadingTemperature>
        <Temperature>{data.main.temp}</Temperature>
      </HeadingTemperature>
      <Visibility>{data.weather[0].main}</Visibility>
      <Metas humidity={data.main.humidity} wind={data.wind.speed} />
    </Wrapper>
  );
};

export default Weather;
