import React from "react";
import './SidebarSelect.css';

function SidebarSelect({text}){
    return(
        <div className = "sidebarSelect">
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarSelect;