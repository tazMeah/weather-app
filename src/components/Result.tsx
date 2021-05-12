import React, { useState, useEffect } from "react";
import WeatherApi from "./WeatherApi";
import "./Result.css";

function Result(props : any) {

    // // to alter the state, initial state is empty
    // let [weather, setWeather] = useState([]);


    
    // useEffect(() => {
    //     // API call goes here.
    //     fetch("https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=c75be72de3dc82042431f27ccbf29521&units=imperial")
    //         .then(res => res.json())
    //         // .then(result => result)
    //         .then(result => setWeather(result))
    //         .then(function(){
    //             console.log(weather) // returning an object for Detroit's weather
    //         })
    // }, []);




    // cityName = result.name;
    // description = result.weather[0].description;
    // feelsLike = result.main.feels_like;
    // wind = result.wind.speed;
    // console.log(cityName, description, feelsLike, wind);



    return (
        <div id="result">

            <WeatherApi cityName={props.cityName}/>

        </div>
    )
}

export default Result;
