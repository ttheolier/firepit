import React from "react";
import './Home.css';
import Sidebar from "./Sidebar";
import Pit from "./Pit";
import DailySpark from "./DailySpark";

function Home() {
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser === null)
  {
    return(
      <div className = "home">
      {/*Sidebar */}
      <Sidebar auth = {false}/>

      {/*Pit */}
      <Pit auth = {false}/>

      {/*DailySpark */}
      <DailySpark auth = {false}/>

      </div>
    )
  }
  else
  {
    return (
      <div className="home">

        {/*Sidebar */}
        <Sidebar auth = {true}/>

        {/*Pit */}
        <Pit auth = {true}/>

        {/*DailySpark */}
        <DailySpark auth = {true}/>
      </div>
    );
  }
}

export default Home;
