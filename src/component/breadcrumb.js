import React from "react";

export default function(){
    return(
        <div className="breadcrumb-wrapper">
            <ul className="breadcrumb-list">
                <li className="breadcrumb-list-item">Home</li>
                <i class="fa-solid fa-chevron-right breadcrumb-navigator"></i>
                <li className="breadcrumb-list-item">Used</li>
                <i class="fa-solid fa-chevron-right breadcrumb-navigator" ></i>
                <li className="breadcrumb-list-item">Pune</li>
            </ul>
        </div>
    );
}