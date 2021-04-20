import React from "react";
import './Login.css';
import Button from '@material-ui/core/Button';

function Login(){
    return(
        <div className = "login">
            <div className = "navbar">
            {/*<Button size = "small" target="_blank" href="Login" className = "loginNav" style={{justifyContent: "flex-start"}} fullHeight = {true}>Login</Button>*/}
                <a href = "Login">Login</a>
                <a href = "Register">Register</a>
            </div>
            
        </div>
    )
}

export default Login;