import React, {useEffect,useState} from "react";
import './Pit.css';
import Spark from './Spark';
import DailyBox from './DailyBox';
import db from './firebase';

function Pit(){
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        db.collection("posts").onSnapshot((snapshot)=> 
        setPosts(snapshot.docs.map((doc)=>doc.data()))
        );
    }, []);
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

export default Pit;