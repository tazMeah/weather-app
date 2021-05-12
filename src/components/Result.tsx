import React, { useState, useEffect } from "react";
// import getWeather from "../weatherApi";
import "./Result.css";

function Result() {

    // to alter the state, initial state is empty
    const [weather, setWeather] = useState([]);

    
    useEffect(() => {
        // API call goes here.
        fetch("https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=c75be72de3dc82042431f27ccbf29521&units=imperial")
            .then(res => res.json())
            // .then(result => result)
            .then(result => setWeather(result))
            .then(function(){
                console.log(weather)
            })
    }, []);




    // cityName = result.name;
    // description = result.weather[0].description;
    // feelsLike = result.main.feels_like;
    // wind = result.wind.speed;
    // console.log(cityName, description, feelsLike, wind);








    return (
        <div id="result">

            <h1></h1>
            <p>Description:</p>
            <p>Current Temp:</p>
            <p>Feels Like:</p>
            <p>Wind Speed:</p>

        </div>
    )
}

export default Result;