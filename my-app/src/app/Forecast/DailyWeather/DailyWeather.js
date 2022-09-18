import styled from "styled-components";
import Temperature from "../../../components/Temperature/Temperature";
import WeatherIcon from "../../../components/WeatherIcon/WeatherIcon";

const screenWidth = "1024px";

const Wrapper = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  @media screen and (min-width:${screenWidth}){
    margin-left: 5rem;
  }
`;

const Day = styled.div`
  font-size: 1rem;
  @media screen and (min-width:${screenWidth}){
    font-size: 1.5rem;
  }
`;

const SytledTemperature = styled.div`
  font-size: 1rem;
  @media screen and (min-width:${screenWidth}){
    font-size: 1.5rem;
  }
`;
const StyledWeatherIcon = styled.div`
  @media screen and (max-width:${screenWidth}){
    > img {
    width: 60px;
    height: 60px;
  }
  }
`

const DailyWeather = ({ day, temperature, weather}) => {
  return (
    <Wrapper>
      <Day>{day}</Day>
      <StyledWeatherIcon>
      <WeatherIcon value={weather[0].icon} description={weather[0].main} />
      </StyledWeatherIcon>

      <SytledTemperature>
        <Temperature>{temperature}</Temperature>
      </SytledTemperature>
    </Wrapper>
  );
};

export default DailyWeather;
