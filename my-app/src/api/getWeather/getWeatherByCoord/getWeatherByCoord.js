import OpenWeatherMap from "../../../libs/OpenWeatherMap";

const getWeatherByCoord = (lat,lon,units) => OpenWeatherMap.get('./weather',{
    params:{
        lat:lat,
        lon:lon,
        units:  units,
    }
})
export default getWeatherByCoord