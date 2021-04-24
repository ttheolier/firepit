import React, {useEffect,useState} from "react";
import './Profile.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Sidebar from "./Sidebar";
import Avatar from '@material-ui/core/Avatar';
import DailyBox from './DailyBox';
import db from './firebase';
import firebase from "firebase/app";
import "firebase/auth";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },

    veryLarge: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    }
  }));

function Profile(){
    const classes = useStyles();
    const [posts,setPosts] = useState([]);
    const [users,setUsers] = useState([]);
    var user = firebase.auth().currentUser;
    var email = localStorage.getItem('user');
    var usersRef;
    var username;
    var name;
    var bio;
    var avatar;

    // Create a query against the collection.
    var query;
    console.log(email);

    useEffect(()=>{
        if (user != null) {
          email = user.email;
          //uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                           // this value to authenticate with your backend server, if
                           // you have one. Use User.getToken() instead.
        }
        db.collection("posts").orderBy("timestamp", "desc").where("email", "==", email).onSnapshot((snapshot)=> 
        setPosts(snapshot.docs.map((doc)=>doc.data()))
        );
        db.collection("accounts").where("email", "==", email).onSnapshot((snapshot)=> 
        setUsers(snapshot.docs.map((doc)=>doc.data()))
        );
        /*var docRef = db.collection("users").doc("Razf9dde8e4OQWHGXGzy");

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });*/
        db.collection("accounts").where("email", "==", email)
          .get()
          .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  username = doc.data().username;
                  name = doc.data().name;
                  bio = doc.data().bio;
                  //avatar = Object.assign(doc.data().avatar);
                  //console.log(avatar);
                  document.getElementById("username").innerHTML = "@" + username;
                  document.getElementById("name").innerHTML = name;
                  document.getElementById("bio").innerHTML = bio;
                  /*var temp = document.getElementById("avatar");   // Get the first <h1> element in the document
                  var att = document.createAttribute("src");       // Create a "class" attribute
                  att.value = String(avatar);                           // Set the value of the class attribute
                  temp.setAttributeNode(att);  */
                  //document.getElementById("avatar").setAttribute("src", "hi");
              });
          })
          .catch((error) => {
              console.log("Error getting documents: ", error);
          });
        /*{users.slice(0,1).map(user =>(
          
          //text = {post.text}
          //avat = {post.avatar}
          //date = {post.date}
          username = {user.username}
          
      ))}*/
        //usersRef = db.collection("cities");
        //query =  usersRef.where("email", "==", email);

        //document.getElementById("username").innerHTML = username;
        //console.log(posts);
        //console.log(users);
        //console.log(avatar);
    }, []);
    return(
        <div className = "profile">
            {/*Sidebar */}
            <Sidebar auth = {true}/>
            <div className = "profileSide">
              <div className = "topBox">
                <div className = "info">
                    {/*only should be one matching user in db, so splicing is fine*/}
                    {users.slice(0,1).map(post =>(
                        <Avatar
                        src = {post.avatar} 
                        className={classes.veryLarge}
                        />
                    ))}
                    {/*<Avatar id = "avatar" src = {avatar} className={classes.veryLarge}></Avatar>*/}
                    <div className = "rightside">
                      <h1 id = "username"></h1>
                      <h2 id = "name"></h2>
                      <p id = "bio"></p>
                    </div>
                </div>
                <div className = "sparkFeed">
                  <h1>Your Sparks</h1>
                  {posts.map(post =>(
                        <DailyBox
                        text = {post.text}
                        avat = {post.avatar}
                        date = {post.date}
                        username = {post.username}
                        />
                    ))}
                </div>
              </div>
            </div>
        </div>
    )
}

export default Profile;