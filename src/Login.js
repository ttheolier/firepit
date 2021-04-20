import React, {useState} from "react";
import './Login.css';
import Button from '@material-ui/core/Button';
import db from "./firebase";
import firebase from "firebase/app";
import "firebase/auth";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Login(){
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [user,setUser] = useState();

    const Login = (e) => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
            //const user = { username, password };
            localStorage.setItem('user', email);
            history.push("/home");
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            alert(errorMessage);
        });
    }

    return(
        <div className = "login">
            <div className = "navbar">
            {/*<Button size = "small" target="_blank" href="Login" className = "loginNav" style={{justifyContent: "flex-start"}} fullHeight = {true}>Login</Button>*/}
                <a>Login</a>
                <a href = "register">Register</a>
            </div>
            <form>
                <div className = "fields">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" value={email}></input><br/>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} type="text" id="password" name="password" value = {password}></input><br/>
                </div>
                <div className = "subButtons">
                    <Button variant = "contained">guest</Button>
                    <div className = "loginButton">
                        <Button variant = "contained" onClick = {Login}>Login</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;