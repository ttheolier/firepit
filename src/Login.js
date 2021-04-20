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
            <div className = "fields">
                <p>Email</p>
                <input type="text" id="email" name="email"></input><br/>
                <p>Password</p>
                <input type="text" id="password" name="password"></input><br/>
            </div>
            <div className = "subButtons">
                <Button variant = "contained">guest</Button>
                <div className = "loginButton">
                    <Button variant = "contained" color = "powderblue">Login</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Login;