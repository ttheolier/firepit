import React from "react";
import './Home.css';
import Sidebar from "./Sidebar";
import Pit from "./Pit";
import DailySpark from "./DailySpark";

function Home() {
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
