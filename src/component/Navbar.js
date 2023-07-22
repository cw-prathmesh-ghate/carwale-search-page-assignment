import React from "react";
import logo from "../images/logo.svg";

export default function () {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <img className="navbar-logo" src={logo} alt="" />
        <ul className="navbar-list">
          <li className="navbar-list-item">NEW CARS</li>
          <li className="navbar-list-item">USED CARS</li>
          <li className="navbar-list-item">REVIEWS & NEWS</li>
        </ul>
        <input className="navbar-search" type="text" placeholder="Search" />
        <i class="fa-solid fa-magnifying-glass navbar-searchlogo" ></i>
        <i class="fa-solid fa-location-dot navbar-locationlogo"></i>
        <i class="fa-solid fa-language navbar-translatelogo"></i>
        <i class="fa-regular fa-user navbar-profilelogo"></i>

      </div>
    </div>
  );
}
