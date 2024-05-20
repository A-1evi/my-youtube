import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;
 
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount } = statistics;

  return (
    <div className=" py-2 mx-8 w-80  ">
      <img className="w-full rounded-3xl" alt="thumbnail" src={thumbnails.medium.url}></img>
      <ul className="">
        <li className="text-xl font-bold my-2">{title.slice(0,55) + "..."}  </li>
        <li className="font-medium text-lg text-gray-700">{channelTitle}</li>
        <li className="font-medium">
          {viewCount > 1000
            ? Math.trunc(viewCount / 1000) + "K views"
            : viewCount}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
