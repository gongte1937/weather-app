import styled from "styled-components";
import Temperature from "../../../components/Temperature/Temperature";
import Metas from "../../../components/Metas/Metas";

const Wrapper = styled.div`

  padding: 50px 0px 60px 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
`;

const HeadingTemperature = styled.p`
  text-align: center;
  font-size: 5rem;
  color: white;
  margin: 0;
`;

const Weather = ({ data, units }) => {
  // fetch wether data from api
  console.log("speed:" , data)
  return (
    <Wrapper>
      <HeadingTemperature>
        <Temperature >{data.main.temp}</Temperature>
      </HeadingTemperature>
      <Metas humidity={data.main.humidity} wind={data.wind.speed} units={units} />
    </Wrapper>
  );
};

export default Weather;
