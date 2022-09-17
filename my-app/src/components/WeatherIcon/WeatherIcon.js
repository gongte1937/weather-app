import React from "react";

const WeatherIcon = ({value,description}) => (
        <img src={`https://openweathermap.org/img/wn/${value}@2x.png`} alt={description}/>

);

export default WeatherIcon;



