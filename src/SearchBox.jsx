import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
 
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="61e87b3f173c8f894c2e97d1e2bc7915";

    let getWeatherInfo=async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }

    }

    let buttonstyle={margin:"10px" ,marginTop:"20px"};
   
    
    let handleChange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
        
    }
    let styleerr={color:"black"};
    return(
        <div>
            <h1>Search for the weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city"  label="City Name" variant="outlined" required vlaue={city} onChange={handleChange}/>
                <br></br>
                <Button style={buttonstyle} variant="contained" type="submit">Enter</Button>
                {error && <h3 style={styleerr} >No such place exists</h3>}
            </form>
        </div>
    )
}