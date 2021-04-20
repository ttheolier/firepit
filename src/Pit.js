import React, {useEffect,useState} from "react";
import './Pit.css';
import Spark from './Spark';
import DailyBox from './DailyBox';
import db from './firebase';

function Pit({auth}){
    const [posts,setPosts] = useState([]);

        useEffect(()=>{
            db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot)=> 
            setPosts(snapshot.docs.map((doc)=>doc.data()))
            );
        }, []);
    if (auth===true)
    {
        return(
            <div className = "pit">
                <div className = "pitTop">
                    {/*pit*/}
                    <div className = "pitheader">
                        <h1>FirePit</h1>
                    </div>
                    <Spark />
                </div>
                <div className = "pitMain">
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
        );
    }
    else
    {
        return(
            <div className = "pit">
                <div className = "pitTop">
                    {/*pit*/}
                    <div className = "pitheader">
                        <h1>FirePit</h1>
                    </div>
                    <p className = "loginMessage">Want to create a Spark? <a href = "/">Login</a> or <a href = "/register">Sign Up!</a></p>
                </div>
                <div className = "pitMain">
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
        );
    }
}

export default Pit;