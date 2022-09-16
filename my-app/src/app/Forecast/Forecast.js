import React, {useState, useEffect} from "react";
import styled from "styled-components";
import getForecast from "../../api/getWeather/getForecast";
import DailyWeather from "./DailyWeather";




const Layout = styled.div`
    background-color: white;
    padding: 25px 50px;
    width: 100vh;
    margin-top: 1rem;
    display: flex;
`

const Forecast = ({city}) =>{

    const [data,setData] = useState()
    const [Loading, setLoading] = useState(true)

    useEffect(()=>{
        getForecast(city).then((res)=>{
            setData(res)
            setLoading(false)
        })


    },[city])

    if(Loading){
        return(
            <div>Loading...</div>
        )
    }
    console.log("forecast",data.data.list.filter(({dt_txt})=> dt_txt.endsWith('00:00:00')))

    return(
        <Layout>
            <DailyWeather />
            <DailyWeather />
            <DailyWeather />
            <DailyWeather />
            <DailyWeather />
        </Layout>
    )
}

export default Forecast;