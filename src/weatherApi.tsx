import React from "react";


const api = {
    key: "c75be72de3dc82042431f27ccbf29521",
    url: "api.openweathermap.org/data/2.5/weather?q=",

}



function getWeather() {
    // "detroit" is hardcoded at the moment
    fetch("https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=c75be72de3dc82042431f27ccbf29521&units=imperial")
        .then(res => res.json())
        .then(result => result)
}

export default getWeather;

