import React from "react";
import './Sidebar.css';
import SidebarSelect from "./SidebarSelect";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Home from '@material-ui/icons/HomeOutlined';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Button } from "@material-ui/core";

function Sidebar() {
    return(
        <div className = "sidebar">
            {/*Maybe Logo */}

            {/*Home */}
            {/*<Button
                size = "large" 
                target="_blank" 
                href="about"
                startIcon={<Home />}
            >
                Delete
            </Button>*/}
            <SidebarSelect Icon = {Home} text = "home"/>
        
            {/*Profile */}
            <SidebarSelect Icon = {AccountCircleOutlinedIcon} text = "profile"/>

            <SidebarSelect Icon = {InfoOutlinedIcon} text = "about"/>

            {/*Spark Button: placeholder currently */}
            <SidebarSelect Icon={OfflineBoltOutlinedIcon} text = "spark"/>
            

        </div>

    );
}

export default Sidebar;