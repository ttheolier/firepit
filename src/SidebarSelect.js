import React from "react";
import './SidebarSelect.css';
import Button from '@material-ui/core/Button';

function SidebarSelect({Icon,text}){
    return(
        <div className = "sidebarSelect">
            <Button size = "large" target="_blank" href={text} startIcon = {<Icon/>}>{text}</Button>
        </div>
    )
}

export default SidebarSelect;