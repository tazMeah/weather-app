import React, {useState} from "react";
import "./Form.css";


function Form (props:any) {
    
    return(
        <form>
          <label>City: </label>
          <input type="text" placeholder="Enter your city..." ></input>
          <button type="button" onClick={props.getCity}>Search</button>
        </form>
    )
}

export default Form;