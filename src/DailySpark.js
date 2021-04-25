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
            <form name="DailySpark" method="GET" action="servlet">

                <div className="gifLogic">
                    < div className="gifHeader">
                        <h1>GIF Search</h1>
                    </div>
                    <div className="searchboxWrapper">
                        <ReactGiphySearchbox
                            className = "giphy"
                            gifListHeight = "150px"
                            apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
                            onSelect={(item) => console.log(item)
                                .then(response => response.json())
                                .then(json => {
                                    json.data
                                        .map(gif => gif.images.fixed_height.url)
                                        .forEach(url => {
                                            let img = document.createElement('img')
                                            img.src = url
                                            document.body.appendChild(img)
                                        })
                                })
                                .catch(error => document.body.appendChild = error)
                            }
                            masonryConfig={[
                                { columns: 2, imageWidth: 100, gutter: 5 },
                                { mq: "25%", columns: 1, imageWidth: 300, gutter: 5 }
                            ]}
                        />
                    </div>
                    <div className="gifLookup">
                        <input type="submit" value="Submit" />
                    </div>

                </div>
            </form>

        </div>




    );
}

export default DailySpark;