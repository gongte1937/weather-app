import OpenWeatherMap from "../../../libs/OpenWeatherMap";


const getForecast = (city) => OpenWeatherMap.get('./forecast',{
    params:{
        q:city,
        units:  "metric",
    }
})

export default getForecast