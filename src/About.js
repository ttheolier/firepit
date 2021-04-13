import React from "react";
import Sidebar from "./Sidebar";
import './About.css';

function About(){
    return(
        <div className = "about">
            {/*Sidebar */}
            <Sidebar/>
            <div className = "about_description">
                <h1>About Us</h1>
                <p1>This is Firepit</p1>
            </div>
        </div>
    )
}

export default About;