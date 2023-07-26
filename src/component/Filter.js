import React from "react";
import PriceRange from "./prices";
import axios from "axios";
import FilterParameter from "./filterparameters";

export default function (props) {
  const [AppliedFilters, SetAppliedFilters] = React.useState({
    MakeName: "",
    CarwaleAbsure: false,
    CertifiedCars: false,
    QualityReportsAvaliable: false,
    PriceUpperBound: 0,
    PriceLowerBound: 0,
  });

  const handleStateValue = (updateObj) => {
    console.log(updateObj);
    SetAppliedFilters({ ...AppliedFilters, ...updateObj });
  };

  const prices = [
    { title: "Below ₹ 3 Lakhs", lowerBound: 1, upperbound: 3 },
    { title: "₹ 3-5 Lakhs", lowerBound: 3, upperbound: 5 },
    { title: "₹ 5-8 Lakhs", lowerBound: 5, upperbound: 8 },
    { title: "₹ 12-20 Lakhs", lowerBound: 12, upperbound: 20 },
    { title: "Above ₹ 20 Lakhs", lowerBound: 20, upperbound: 100 },
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
    return (
      <FilterParameter
        handleClick={handleStateValue}
        keyparameter={parameter}
      />
    );
  });

  let PriceElements = prices.map((price) => {
    return (
      <PriceRange
        handleClick={(l, u) =>
          // handleStateValue({ PriceLowerBound: l, PriceUpperBound: u })
          {
            if (AppliedFilters.PriceLowerBound == l && AppliedFilters.PriceUpperBound == u) {
              return handleStateValue({ PriceLowerBound: 0, PriceUpperBound: 0 });
            }
            else{
              return handleStateValue({ PriceLowerBound: l, PriceUpperBound: u })
            }
          }
        }
        keyprice={price}
      />
    );
  });

  const [IsCollapsed, SetIsCollapsed] = React.useState(true);

  const style = { display: IsCollapsed ? "grid" : "none" };
  const style1 = { transform: !IsCollapsed ? "" : "rotate(180deg)" };

  const handleApplyFilters = () => {
    // Send the selected filters to the backend API
    axios
      .post("http://localhost:5213/api/GetData", AppliedFilters)
      .then((response) => {
        // Handle the response from the backend (e.g., update state with filtered data)
        const filteredData = response.data;
        props.setData(filteredData);
        console.log(filteredData);
        // Do something with the filtered data (e.g., update state or UI)
      })
      .catch((error) => {
        console.error("not getting correct data", error);
        // Handle errors, if any
      });
  };

  React.useEffect(() => {
    handleApplyFilters();
  }, [AppliedFilters]);

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
