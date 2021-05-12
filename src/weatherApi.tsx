import React, {useState, useEffect} from "react";


const api = {
    key: "c75be72de3dc82042431f27ccbf29521",
    url: "api.openweathermap.org/data/2.5/weather?q=",

}




function GetWeather() {

    const [weather, setWeather] = useState([]);

    useEffect(() => {
        GetWeather();
        console.log(weather);
    }, [])

    // "detroit" is hardcoded at the moment
     fetch("https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=c75be72de3dc82042431f27ccbf29521&units=imperial")
        .then(res => res.json())
        // .then(result => result)
        .then(result => setWeather(result))

        // how to pass up "result" to the useState in the Result app that will call this function?
}

export default GetWeather;

