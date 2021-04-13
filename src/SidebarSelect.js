import React from "react";
import './SidebarSelect.css';
import Button from '@material-ui/core/Button';

function SidebarSelect({Icon,text}){
    return(
        <div className = "sidebarSelect">
            <Button size = "large" target="_blank" href={text} startIcon = {<Icon/>} className = "sideOption" style={{justifyContent: "flex-start"}} fullWidth = {true}>{text}</Button>
        </div>
    )
}

export default SidebarSelect;