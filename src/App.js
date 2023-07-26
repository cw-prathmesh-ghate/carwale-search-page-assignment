import "./style.css";
import "./filter.css";
import React from "react";
import Filter from "./component/Filter";
import Cars from "./component/Cars";
import BreadCrumb from "./component/breadcrumb";
import Navbar from "./component/Navbar";
import Description from "./component/Usedcardescription";

function App() {

  const [FinalData,SetFinalData]=React.useState([])


  return (
    <div className="main">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="content-container">
        <BreadCrumb />
        <Description searchCount={FinalData.length}/>
        <div className="filter-and-cars">
          <Filter setData={SetFinalData}/>
          <Cars  sendData={FinalData} />
        </div>
      </div>
    </div>
  );
}

export default App;
