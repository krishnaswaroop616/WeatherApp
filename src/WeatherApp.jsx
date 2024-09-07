import SearchBox from "./SearchBox"
import InfoBox from "./InfoBos"
import {useState} from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin:24.05,
        tempMax:25.05,
        humidity:47,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo); 
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        
    );
}