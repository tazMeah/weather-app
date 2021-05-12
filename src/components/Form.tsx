import React from "react";
import { isPropertySignature } from "typescript";
import "./Form.css";


function Form () {
    return(
        <div id="formContainer">
            <form>
                <label>City</label>
                <input type="text" placeholder="Enter a city..."></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form;