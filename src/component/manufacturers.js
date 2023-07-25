import React from "react";

export default function(props){
    return(
        <div className="manufacturer-container">
            <div className="specified-manufacturer">
                
                <input type="checkbox" id={props.keymanufacturer}/>
                <label htmlFor={props.keymanufacturer}>{props.keymanufacturer}</label>
            </div>
                <hr />
        </div>
    );

}