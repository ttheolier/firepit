import React from "react";
import './Sidebar.css';
import SidebarSelect from "./SidebarSelect";

function Sidebar() {
    return(
        <div className = "sidebar">
            {/*Maybe Logo */}

            {/*Home */}
            
            <SidebarSelect text = "Home"/>

            {/*Profile */}
            <SidebarSelect text = "Profile"/>

            

            {/*Spark Button: placeholder currently */}
            <SidebarSelect text = "Spark"/>
            

        </div>

    );
}

export default Sidebar;