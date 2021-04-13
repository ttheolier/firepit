import React from "react";
import './Pit.css';
import Spark from './Spark';
import DailyBox from './DailyBox';

function Pit(){
    return(
        <div className = "pit">
            <div className = "pitTop">
                {/*pit*/}
                <div className = "pitheader">
                    <h1>FirePit</h1>
                </div>
                <Spark />
            </div>
            <div className = "pitMain">
                <DailyBox text = "some stuff that people said"/>

                <DailyBox text = "some stuff that people said some stuff that people said some stuff that people said some stuff that people said some stuff that people said some stuff that people said some stuff that people said some stuff that people said some stuff that people said"/>

                <DailyBox text = "some stuff that people said"/>

                <DailyBox text = "some stuff that people said"/>

                <DailyBox text = "some stuff that people said"/>

                <DailyBox text = "some stuff that people said"/>

                <DailyBox text = "some stuff that people said"/>

                <DailyBox text = "some stuff that people said"/>

                <DailyBox text = "some stuff that people said"/>
            </div>
        </div>
    );
}

export default Pit;