import styled from "styled-components";
import Temperature from "../../../components/Temperature/Temperature";
import WeatherIcon from "../../../components/WeatherIcon/WeatherIcon";

const Wrapper = styled.div`
  text-align: center;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
`;

const Day = styled.div`
  font-size: 1.5rem;
`;

const SytledTemperature = styled.div`
  font-size: 1.5rem;
`;

const DailyWeather = ({ day, temperature, weather}) => {
  return (
    <Wrapper>
      <Day>{day}</Day>
      <WeatherIcon value={weather[0].icon} description={weather[0].main} />
      <SytledTemperature>
        <Temperature>{temperature}</Temperature>
      </SytledTemperature>
    </Wrapper>
  );
};

export default DailyWeather;
