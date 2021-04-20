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
      <Sidebar/>

      {/*Pit */}
      <Pit auth = {false}/>

      {/*DailySpark */}
      <DailySpark />

      </div>
    )
  }
  else
  {
    return (
      <div className="home">

        {/*Sidebar */}
        <Sidebar/>

        {/*Pit */}
        <Pit auth = {true}/>

        {/*DailySpark */}
        <DailySpark />
      </div>
    );
  }
}

export default Home;
