import React, { useEffect, useState } from "react";
import './DailySpark.css';
import ReactGiphySearchbox from "react-giphy-searchbox";
import ReactDOM from "react-dom";
import DailyBox from './DailyBox';
import db from './firebase';

function DailySpark() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
    return (
        <div className="dailySpark">
            <div className="dsHeader">
                <h1>Daily Spark</h1>
            </div>
            <div className="dsSpark">
                {/*only getting the first, not a random one */}
                {posts.slice(0, 1).map(post => (
                    <DailyBox
                        text={post.text}
                        avat={post.avatar}
                        date={post.date}
                        username={post.username}
                    />
                ))}
            </div>

            <div className="gifLogic">
                < div className="gifHeader">
                    <h1>GIF Search</h1>
                </div>
                <div className="searchboxWrapper">
                    <ReactGiphySearchbox
                        apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
                        onSelect={(item) => console.log(item)}
                        masonryConfig={[
                            { columns: 2, imageWidth: 110, gutter: 5 },
                            { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
                        ]}
                    />
                </div>

            </div>
        </div>




    );
}

export default DailySpark;