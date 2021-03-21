import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Pit from "./Pit";
import DailySpark from "./DailySpark";

function App() {
  return (
    <div className="app">

      {/*Sidebar */}
      <Sidebar/>

      {/*Pit */}
      <Pit />

      {/*DailySpark */}
      <DailySpark />
    </div>
  );
}

export default App;
