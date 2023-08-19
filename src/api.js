import axios from "axios";

const getVideos = async () => {
    const videos = await axios.get('https://gigih-final-project-backend-production.up.railway.app/videos');
    return videos.data;
}

const getVideoDetail = async (id) => {
    const video = await axios.get(`https://gigih-final-project-backend-production.up.railway.app/videos/${id}`);
    return video.data;
}

export { getVideos, getVideoDetail }