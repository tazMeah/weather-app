import React, {useState} from "react";
import Result from "./Result";
import "./Form.css";


function Form (props:any) {
    
   

    const [cityName, setCityName]  = useState([]);
    

     

    

    return(
        <div id="formContainer">
            <form>
                <label>City</label>
                <input type="text" placeholder="Enter a city..."></input>
                <button>Search</button>
            </form>
            <Result/>
        </div>
    )
}

export default Form;