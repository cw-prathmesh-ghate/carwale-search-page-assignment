import React from "react";
import PriceRange from "./prices";
import FilterParameter from "./filterparameters";

export default function () {
  const prices = [
    "Below ₹ 3 Lakhs",
    "₹ 3-5 Lakhs",
    "₹ 5-8 Lakhs",
    "₹ 8-12 Lakhs",
    "₹ 12-20 Lakhs",
    "Above ₹ 20 Lakhs",
  ];

  const otherParameters = [
    "Manufacturer",
    "Car Age (Year)",
    "Fuel",
    "Kilometer (Kms)",
    "Transmission",
    "Body Type",
    "Owners",
    "Show Cars With",
    "Colours",
  ];

  let ParameterElements = otherParameters.map((parameter) => {
    return <FilterParameter keyparameter={parameter} />;
  });

  let PriceElements = prices.map((price) => {
    return <PriceRange keyprice={price} />;
  });

  const [IsCollapsed, SetIsCollapsed] = React.useState(true);

  const style = { display: IsCollapsed ? "grid" : "none" };
  const style1 = { transform: !IsCollapsed ? "" : "rotate(180deg)" };
  return (
    <div className="filter-container">
      <div className="quality-checks">
        <div className="heading-section">
          <div className="filter-heading">
            <i class="fa-solid fa-filter"></i>
            <p>Filters</p>
          </div>
          <div className="clear-btn-section">
            <input className="clear-btn" type="button" value="Clear All" />
          </div>
        </div>
        <div className="quality-checkbox-container">
          <div className="checkbox-1">
            <input type="checkbox" id="CarWale abSure" />
            <label htmlFor="CarWale abSure">CarWale abSure</label>
            <span>(58)</span>
            <br />
          </div>
          <div className="checkbox-2">
            <input type="checkbox" id="Certified Cars" />
            <label htmlFor="Certified Cars">Certified Cars</label>
            <span>(190)</span>
            <br />
          </div>

          <div className="checkbox-3">
            <input type="checkbox" id="Quality Report Avaliable" />
            <label htmlFor="Quality Report Avaliable">
              Quality Report Avaliable
            </label>
            <span>(196)</span>
            <br />
          </div>
        </div>
      </div>
      <div className="price-filter-container">
        <div className="price-heading">
          <p>Budget(Lakhs)</p>
          <i
            class="fa-solid fa-caret-down price-dropdownbtn"
            onClick={() => {
              SetIsCollapsed(!IsCollapsed);
            }}
            style={style1}
          ></i>
        </div>
        <div className="price-section" style={style}>
          {PriceElements}
        </div>
        <hr />
        <div className="filter-parameters-section">{ParameterElements}</div>
      </div>
    </div>
  );
}
