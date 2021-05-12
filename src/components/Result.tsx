import React, {useState, useEffect} from "react";
import getWeather from "../weatherApi";
import "./Result.css";

function Result() {

    // to alter the state, initial state is empty
    const [weather, setWeather] = useState([]);

    // for the initial load of data once api is done
    useEffect(() => {
        getWeather();
    }, [])


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