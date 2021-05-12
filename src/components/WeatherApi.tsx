import React from "react";

function WeatherApi (props : any) {

    const api = {
        key: "c75be72de3dc82042431f27ccbf29521",
        url: "api.openweathermap.org/data/2.5/weather?q=",
    
    }
    
    return (
        <div>
            <h2>{props.cityName}</h2>
            <p>Current Temp: </p>
            <p>Feels Like: </p>
            <p>Wind Speed: </p>
        </div>
    )
}






export default WeatherApi;

