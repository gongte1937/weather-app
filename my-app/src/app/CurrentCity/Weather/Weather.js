import styled from "styled-components";
import Temperature from "../../../components/Temperature/Temperature";
import Metas from "../../../components/Metas/Metas";

const screenWidth = "1024px";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  @media screen and (min-width: ${screenWidth}) {
    padding: 50px 0px 60px 150px;
  }
`;

const HeadingTemperature = styled.p`
  text-align: center;
  font-size: 3rem;
  color: white;
  margin: 0;
  @media screen and (min-width: ${screenWidth}) {
    font-size: 5rem;
  }
`;

const Weather = ({ data, units }) => {
  // fetch wether data from api
  console.log("speed:", data);
  return (
    <Wrapper>
      <HeadingTemperature>
        <Temperature>{data.main.temp}</Temperature>
      </HeadingTemperature>
      <Metas
        humidity={data.main.humidity}
        wind={data.wind.speed}
        units={units}
      />
    </Wrapper>
  );
};

export default Weather;
