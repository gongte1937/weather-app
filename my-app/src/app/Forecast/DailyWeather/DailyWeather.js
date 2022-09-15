
import styled from "styled-components";
import Temperature from "../../../components/Temperature/Temperature";

const Wrapper = styled.div`
text-align: center;
margin-left: 2rem;
display: flex;
flex-direction: column;
`

const Day = styled.div`

`
const WeatherIcon = styled.div`

`

const DailyWeather = (day,temperature,weather,)=>(
    <Wrapper>
        <Day/>
        <WeatherIcon/>
        <Temperature/>
    </Wrapper>
)

export default DailyWeather