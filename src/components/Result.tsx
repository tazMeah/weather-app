import React from "react";
import weatherdata from "../weatherApi";
import "./Result.css";

function Result() {
    
    return (
        <div id="result">
            <h1>Detroit</h1>
            <p>Description:</p>
            <p>Current Temp:</p>
            <p>Feels Like:</p>
            <p>Wind Speed:</p>
        </div>
    )
}

export default Result;