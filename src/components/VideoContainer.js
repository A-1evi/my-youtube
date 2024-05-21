import React, { useCallback, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_MOST_POPULAR_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideo();
  }, []);
  const fetchVideo = useCallback(async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_API);
    const json = await data.json();
   
    setVideos(json.items);
    console.log("rendering...")
  },[]);

  return (
    <div className="flex flex-wrap justify-evenly ">
      { videos && videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
