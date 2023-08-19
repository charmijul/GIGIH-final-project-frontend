import React, { useState, useEffect } from "react";
import '../css/home-style.css'
import { getVideos } from "../api";

function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then((result) => {
      setVideos(result)
    });
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to Our Video Portal</h1>
      <div className="video-list">
        {videos.map((video) => (
          <div className="video-card" key={video._id}>
            <img className='video-img' src={`https://img.youtube.com/vi/${video.url_video}/hqdefault.jpg`} alt="" />
            <h2>{video.title}</h2>
            <a href={`/videos/${video._id}`}>Watch Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
