import React from "react";
import './Sidebar.css';
import SidebarSelect from "./SidebarSelect";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Home from '@material-ui/icons/HomeOutlined';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Button } from "@material-ui/core";

function Sidebar({auth}) {
    if (auth === true)
    {
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
                <SidebarSelect Icon = {Home} text = "home" link = "home"/>
            
                {/*Profile */}
                <SidebarSelect Icon = {AccountCircleOutlinedIcon} text = "profile" link = "profile"/>

                <SidebarSelect Icon = {InfoOutlinedIcon} text = "about" link = "about"/>

                {/*Spark Button: placeholder currently */}
                <SidebarSelect Icon={OfflineBoltOutlinedIcon} text = "spark" link = "spark"/>
                

            </div>

        );
    }
    else
    {
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
                <SidebarSelect Icon = {Home} text = "home" link = "home"/>
            
                {/*Profile */}
                <SidebarSelect Icon = {AccountCircleOutlinedIcon} text = "profile" link = "/"/>

                <SidebarSelect Icon = {InfoOutlinedIcon} text = "about" link = "about"/>

                {/*Spark Button: placeholder currently */}
                

            </div>

        );
    }
}

export default Sidebar;