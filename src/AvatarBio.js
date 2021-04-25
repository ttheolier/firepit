import React, {useState} from "react";
import './AvatarBio.css';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import db from "./firebase";

function Avatar(){
    let history = useHistory();
    const [avatar, setAvatar] = useState("");
    const [bio, setBio] = useState("");
    var email = localStorage.getItem('user');

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (!(avatar==""))
        {
            db.collection("accounts").doc(email).update({
                "avatar": avatar
            })
            .then(() => {
                console.log("Avatar Succesfully updated");
        });
        }
        if (!(bio==""))
        {
            db.collection("accounts").doc(email).update({
                "bio": bio
            })
            .then(() => {
                console.log("Bio successfully updated!");
        });
        }

        history.push("/profile")
    }

    return(
        <div className = "box">
            <p>Avatar Image URL</p>
            <input onChange={(e) => setAvatar(e.target.value)} type="text" id="avatar" name="avatar" value={avatar}></input><br/>
            <p>Bio</p>
            <input onChange={(e) => setBio(e.target.value)} type="text" id="bio" name="bio" value = {bio}></input><br/>
            <Button style={{backgroundColor: "turquoise"}} variant = "contained" backgroundColor = "turquoise" onClick = {HandleSubmit} >Submit</Button>
            <Button style={{backgroundColor: "red"}} variant = "contained" backgroundColor = "turquoise" href = "profile" >Cancel</Button>
        </div>
    )
}

export default Avatar;