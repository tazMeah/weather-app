import React from "react";
import WeatherApi from "./WeatherApi";

function Result (props : any) {

    return (
        <div>
            <WeatherApi cityName={props.cityName}/>
        </div>
    )

}

export default Result;