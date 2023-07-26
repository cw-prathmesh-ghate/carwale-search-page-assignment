import React from "react";

export default function (props) {
  return (
    <div className="specified-range-container">
      <div 
        onClick={() =>
          props.handleClick(
            props.keyprice.lowerBound,
            props.keyprice.upperbound
          )
        }
        className="specified-range"
      >
        {props.keyprice.title}
      </div>
    </div>
  );
}
