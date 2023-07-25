import "./style.css";
import "./filter.css";
import React from "react";
import Filter from "./component/Filter";
import Cars from "./component/Cars";
import BreadCrumb from "./component/breadcrumb";
import Navbar from "./component/Navbar";
import Description from "./component/Usedcardescription";

function App() {
  return (
    <div className="main">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="content-container">
        <BreadCrumb />
        <Description />
        <div className="filter-and-cars">
          <Filter />
          <Cars />
        </div>
      </div>
    </div>
  );
}

export default App;
