// src/pages/home.page.js
import React, { useState, useEffect } from "react";
import Home from "../components/Home.component";
import '../css/home-style.css'
import { getVideos } from "../api";

function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then((result) => {
      setVideos(result)
    });
  }, []);

    console.log(videos);
    return <Home videos={videos} />;
}

export default HomePage;
