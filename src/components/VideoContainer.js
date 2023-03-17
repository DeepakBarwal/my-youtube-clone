import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const data = await fetch(
        `${YOUTUBE_VIDEOS_API}${process.env.REACT_APP_GOOGLE_API_KEY}`
      );
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
