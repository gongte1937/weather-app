import OpenWeatherMap from "../../../libs/OpenWeatherMap";

const getWeatherByCity = (city,units) => OpenWeatherMap.get('./weather',{
    params:{
        q:city,
        units:  units,

    }
})

export default getWeatherByCity