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
      <div>
      {/*Sidebar */}
      <Sidebar/>

      {/*Pit */}
      <Pit />

      {/*DailySpark */}
      <DailySpark />

      </div>
    )
  }
  return (
    <div className="home">

      {/*Sidebar */}
      <Sidebar/>

      {/*Pit */}
      <Pit />

      {/*DailySpark */}
      <DailySpark />
    </div>
  );
}

export default Home;
