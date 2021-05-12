import React from "react";
import { isPropertySignature } from "typescript";
import "./Form.css";


function Form (props:any) {
    

    // useEffect will fetch the data once when the form renders.
    

    // fetch again when the button is clicked.

    

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