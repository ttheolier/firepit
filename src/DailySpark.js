import React, {useEffect,useState} from "react";
import './DailySpark.css';
import DailyBox from './DailyBox';
import db from './firebase';

function DailySpark() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        db.collection("posts").onSnapshot((snapshot)=> 
        setPosts(snapshot.docs.map((doc)=>doc.data()))
        );
    }, []);
    return(
        <div className = "dailySpark">
            <div className = "dsHeader">
                <h1>Daily Spark</h1>
            </div>
            <div className = "dsSpark">
                {/*only getting the first, not a random one */}
                {posts.slice(0,1).map(post =>(
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

export default DailySpark;