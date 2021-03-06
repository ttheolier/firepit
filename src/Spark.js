import React, {useState,useEffect} from 'react';
import "./Spark.css";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import db from './firebase';
import firebase from "firebase/app";
//import imge from "https://miro.medium.com/max/1050/1*w0VoRKGkrDx8BQt_kY_CbQ.jpeg";

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

    verylarge: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    }
  }));

function Spark({avatar}){
    const classes = useStyles();
    const [sparkMessage, setSparkMessage] = useState("");
    const [sparkImage, setSparkImage] = useState("");
    var email = localStorage.getItem('user');
    const [posts, setPosts] = useState([]);
    var numPosts;

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
            /*numPosts = posts.length;*/
        );
    }, []);
    numPosts = posts.length;
    console.log(numPosts);
    const Post = (e) => {
      e.preventDefault();
      /*numPosts = posts.length;
      console.log(numPosts);*/
      var date = new Date().toDateString();
      db.collection("accounts").doc(email).get().then((doc) => {
          if (doc.exists &&(sparkMessage !== "")) {
            document.getElementById("error").setAttribute("class","hidden3");
              console.log("Document data:", doc.data());
              db.collection("posts").doc(numPosts.toString()).set({
                avatar: doc.data().avatar,
                date: date,
                email: email,
                text: sparkMessage,
                url: sparkImage,
                timestamp: firebase.firestore.Timestamp.now(),
                username: doc.data().username,
              });
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
              document.getElementById("error").setAttribute("class","error");
              //document.getElementById("error").classList.remove("hidden");
              //document.getElementById("error").classList.add("error");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
      /*db.collection("posts").add({
        displayName: "Rafeh Qazi",
        username: "cleverqazi",
        verified: true,
        text: sparkMessage,
        avatar: "hi",
      });*/
  
      setSparkMessage("");
      setSparkImage("");
    };

    return(
        <div className = "spark">
            <form>
                <div className = "sparkInput">
                    <Avatar src = {avatar} /*"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/HykeemCarterSittingDown.jpg/330px-HykeemCarterSittingDown.jpg"*/ className={classes.large}>
                    </Avatar>
                    {/*<input placeholder = "Create your spark..." type></input>*/}
                    <textarea placeholder = "Create your spark..." name="text" rows="3" cols="10" wrap="soft" onChange={(e) => setSparkMessage(e.target.value)} value={sparkMessage}></textarea>
                </div>
                <textarea className = "imageURL" placeholder = "(Optional)Enter an image url..." rows="1" cols="10" onChange={(e) => setSparkImage(e.target.value)} value={sparkImage}></textarea>
                <pre className = "hidden3" id = "error">Error: Please Input Text To Post</pre>
                <Button onClick = {Post}>Post</Button>
            </form>
            

        </div>
    );
}

export default Spark;