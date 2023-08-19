// VideoDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoDetail } from '../api';
import VideoDetailComponent from '../components/VideoDetail.component';
import '../css/videoDetail-style.css'

function VideoDetail() {
  const { videoId } = useParams();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    async function fetchVideoDetail() {
        const videoData = await getVideoDetail(videoId);
      setVideos(videoData);
    }

    fetchVideoDetail();
  }, [videoId]);

  if (!videos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <h1>Detail Video</h1> */}
      <VideoDetailComponent video={videos} />
    </div>
  );
}

export default VideoDetail;
