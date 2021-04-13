import React from "react";
import './DailySpark.css';
import DailyBox from './DailyBox';

function DailySpark() {
    return(
        <div className = "dailySpark">
            <div className = "dsHeader">
                <h1>Daily Spark</h1>
            </div>
            <div className = "dsSpark">
                <DailyBox text = "this is a palceholder that is intentionally long enough to fill up mulitple rows of text to test flex"/>
            </div>
        </div>
    );
}

export default DailySpark;