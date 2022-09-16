import axios from "axios";

const OpenWeatherMap = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params:{
        appid:"a10da9ff4949dfe4dfbf9657c0d76e7f",

    }
})

export default OpenWeatherMap