import React, {useState} from 'react';
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
    var email = localStorage.getItem('user');

    const Post = (e) => {
      e.preventDefault();
      var date = new Date().toDateString();
      db.collection("accounts").doc(email).get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              db.collection("posts").add({
                avatar: doc.data().avatar,
                date: date,
                email: email,
                text: sparkMessage,
                url: "",
                timestamp: firebase.firestore.Timestamp.now(),
                username: doc.data().username,
              });
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
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
                <Button onClick = {Post}>Post</Button>
            </form>

        </div>
    );
}

export default Spark;