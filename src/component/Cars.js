import React from "react";
import Car from "../images/testimage.webp";

export default function (props) {
  
  return (
    <div className="car-container">
      <input
        className="bestmatch-searchbox"
        type="text"
        placeholder="Best Match"
      />
      <hr />
      {props.sendData.map((carData) => {
        return (
          <div className="car-card-container">
            <div className="car-card">
              <img className="car-card-image" src={Car} alt="error" />
              <div className="car-card-info">
                <div className="car-card-title">
                 {carData.ModelName}
                </div>
                <div className="car-detail">27,000 km | Petrol | City</div>
                <div className="car-price-and-offer">
                  <div className="car-price">₹ {carData.Price}</div>
                  <div className="seperator">|</div>
                  <div className="car-offer">MAKE OFFER</div>
                </div>
                <div className="emi-section">
                  <div className="emi-text">EMI starts at</div>
                  <div className="emi-price">₹10,379</div>
                </div>
                <input
                  className="car-card-btn"
                  type="button"
                  value="Get Seller Details"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
