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
                <p1>Firepit is a project developed by USC students as a short form 
                    social media platform allowing the use of both text and gifs to
                    convey meaning and ideas. Enjoy our app!
                </p1>
                <h2>Developers:</h2>
                <p2>Thomas Theolier<br/>Ryan Shaw<br/>Aaron Wang<br/>
                Anthony Winney<br/>Rahel Yimenu
                </p2>
            </div>
        </div>
    )
}

export default About;