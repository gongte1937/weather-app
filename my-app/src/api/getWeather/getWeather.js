import OpenWeatherMap from "../../libs/OpenWeatherMap";

const getWeather = (city) => OpenWeatherMap.get('./weather',{
    params:{
        q:city,
        units:  "metric",

    }
})

export default getWeather