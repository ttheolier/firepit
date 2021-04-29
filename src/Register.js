import React, {useState} from "react";
import './Register.css';
import Button from '@material-ui/core/Button';
import db from "./firebase";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";


function Register(){
    let history = useHistory();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Register = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log("Succesful register!")
                localStorage.setItem('user', email);
                // ...
                db.collection("accounts").doc(email).set({
                bio: "Create a bio!",
                avatar: "",
                email: email,
                username: username,
                name: name,
                password: password,
                });
                history.push("/home");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                alert(errorMessage);
                // ..
            });
            /*db.collection("accounts").add({
            email: username,
            username: username,
            name: name,
            password: password,
             });*/
        if (name === "")
        {

        }
        else if (username === "")
        {

        }
        else if (email === "")
        {

        }
        else if (password === "")
        {

        }
        else
        {
            /*firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
            db.collection("accounts").add({
            email: username,
            username: username,
            name: name,
            password: password,
            });*/
        }
      };
    

    return(
        <div className = "register">
            <div className = "navbar">
            {/*<Button size = "small" target="_blank" href="Login" className = "loginNav" style={{justifyContent: "flex-start"}} fullHeight = {true}>Login</Button>*/}
                <a href = "/">Login</a>
                <a>Register</a>
            </div>
            <form>
                <div className = "fields">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" value={email}></input><br/>
                    <p>Username</p>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" value={username}></input><br/>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} type="text" id="password" name="password" value={password}></input><br/>
                    <p>Name</p>
                    <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" value={name}></input><br/>
                </div>
                <div className = "subButtons">
                    <div className = "registerButton">
                        <Button variant = "contained" type = "submit" onClick = {Register}>Register</Button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default Register;