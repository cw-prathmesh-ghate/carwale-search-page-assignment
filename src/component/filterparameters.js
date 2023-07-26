import React from "react";
import Manufacturer from "./manufacturers";

export default function (props) {
  

  const ManufactureList = {
    Manufacturer: [
      "Maruti Suzuki",
      "Hyundai",
      "Mahindra",
      "Tata",
      "Toyota",
      "Renault",
    ],
  };

  let ManufacturerElements = ManufactureList.Manufacturer.map((make) => {
    return <Manufacturer changeClick={(value)=>props.handleClick({'MakeName':value})} keymanufacturer={make} />;
  });

  

  const [IsDroppedDown, SetIsDroppedDown] = React.useState(false);

  const style = { display: IsDroppedDown ? "block" : "none" };
  const style1 = { transform: !IsDroppedDown ? "" : "rotate(180deg)" };


  return (
    <div className="filter-parameters-container">
      <div className="specified-filter-section">
        <div className="specified-filter">
          <div className="specified-filter-heading">{props.keyparameter}</div>
          <i
            class="fa-solid fa-caret-down price-dropdownbtn"
            style={style1}
            onClick={() => {
              SetIsDroppedDown(!IsDroppedDown);
            }}
          ></i>
        </div>
        <div className="specified-filteroptions" style={style}>
          {props.keyparameter === "Manufacturer" ? <p>POPULAR BRANDS</p> : ""}
          {props.keyparameter === "Manufacturer" ? ManufacturerElements : ""}
        </div>
      </div>
      <hr />
    </div>
  );
}
