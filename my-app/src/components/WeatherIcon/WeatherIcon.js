import React from 'react';
import styled from "styled-components";

const WeatherIcon = (value,description)=> (
    <img alt={description} src={`https://openweathermap.org/img/wn/${value}.png`} />
)

export default WeatherIcon