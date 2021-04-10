import React from "react";
import './SidebarSelect.css';
import Button from '@material-ui/core/Button';

function SidebarSelect({text}){
    return(
        <div className = "sidebarSelect">
            <Button size = "large" target="_blank" href="about">{text}</Button>
        </div>
    )
}

export default SidebarSelect;