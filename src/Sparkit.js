import React from "react";
import './Sparkit.css';
import Sidebar from "./Sidebar";
import Spark from "./Spark";

function Sparkit(){
    return(
        <div className = "sparkit">
            <Sidebar auth = {true}/>

            <Spark auth = {true}/>
        </div>
    );
}

export default Sparkit;