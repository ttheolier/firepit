import React, { useEffect, useState } from "react";
import './DailySpark.css';
import ReactGiphySearchbox from "react-giphy-searchbox";
import ReactDOM from "react-dom";
import DailyBox from './DailyBox';
import db from './firebase';
import Button from '@material-ui/core/Button';

function DailySpark({auth}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );

    }, []);
    console.log(posts.length);
    var date = new Date().toLocaleDateString();
    if (localStorage.getItem('date') == null || !(localStorage.getItem('date')==date))
    {
        const min = 0;
        const max = (posts.length);
        const random = Math.floor(Math.random() * (max - min) + min);
        localStorage.setItem('date', date);
        localStorage.setItem('random', random);
        console.log(random);
    }
    const daily = parseInt(localStorage.getItem('random'));

    const showGifs = (e) => {
        e.preventDefault();

        var temp = document.getElementById("showGif");
        temp.classList.remove('showGif');
        temp.classList.add('hidden');
        temp = document.getElementById("searchboxWrapper");
        temp.classList.remove('hidden');
        temp.classList.add('searchboxWrapper');
        temp = document.getElementById("gifLookup");
        temp.classList.remove('hidden2');
        temp.classList.add('gifLookup');
    }

    const hideGifs = (e) => {
        e.preventDefault();

        var temp = document.getElementById("showGif");
        temp.classList.remove('hidden');
        temp.classList.add('showGif');
        temp = document.getElementById("searchboxWrapper");
        temp.classList.remove('searchboxWrapper');
        temp.classList.add('hidden');
        temp = document.getElementById("gifLookup");
        temp.classList.remove('gifLookup');
        temp.classList.add('hidden2');
    }
    if (auth === true)
    {
        return (
            <div className="dailySpark">
                <div className="dsHeader">
                    <h1>Daily Spark</h1>
                </div>
                <div className="dsSpark">
                    {/*only getting the first, not a random one */}
                    {posts.slice(daily, daily+1).map(post => (
                        <DailyBox
                            text={post.text}
                            avat={post.avatar}
                            date={post.date}
                            username={post.username}
                            url = {post.url}
                        />
                    ))}
                </div>
                <form name="DailySpark" method="GET" action="servlet">

                    <div className="gifLogic">
                        < div className="gifHeader">
                            <h1>GIF Search</h1>
                            <Button className = "showGif" id = "showGif" variant="contained" onClick = {showGifs}>Show Gifs</Button>
                        </div>
                        <div className= "hidden" id = "searchboxWrapper">
                            <ReactGiphySearchbox
                                className = "giphy"
                                gifListHeight = "150px"
                                apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
                                /*onSelect={(item) => console.log(item)
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
                                }*/
                                masonryConfig={[
                                    { columns: 2, imageWidth: 100, gutter: 5 },
                                    { mq: "30%", columns: 1, imageWidth: 300, gutter: 5 }
                                ]}
                            />
                        </div>
                        <div className="hidden2" id = "gifLookup">
                            {/*<input type="submit" value="Submit" />*/}
                            <pre className = "helper">RIGHT CLICK ON A GIF AND COPY ITS URL</pre>
                            <Button id = "hideGifs" className = "hideGifs" variant="contained" onClick = {hideGifs}>Hide Gifs</Button>
                        </div>

                    </div>
                </form>

            </div>




        );
    }
    else{
        return (
            <div className="dailySpark">
                <div className="dsHeader">
                    <h1>Daily Spark</h1>
                </div>
                <div className="dsSpark">
                    {/*only getting the first, not a random one */}
                    {posts.slice(daily, daily+1).map(post => (
                        <DailyBox
                            text={post.text}
                            avat={post.avatar}
                            date={post.date}
                            username={post.username}
                            url = {post.url}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default DailySpark;