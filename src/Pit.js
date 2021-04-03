import React from "react";
import './Pit.css';
import Spark from './Spark';

function Pit(){
    return(
        <div className = "pit">
            {/*pit*/}
            <div className = "pitheader">
                <h1>FirePit</h1>
            </div>
            <Spark />
        </div>
    );
}

export default Pit;