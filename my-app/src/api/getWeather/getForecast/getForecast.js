import OpenWeatherMap from "../../../libs/OpenWeatherMap";


const getForecast = (city,units) => OpenWeatherMap.get('./forecast',{
    params:{
        q:city,
        units:  units,
    }
})

export default getForecast