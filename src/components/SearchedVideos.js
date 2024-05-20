import React from "react";
import { useSelector } from "react-redux";

const SearchedVideos = () => {
  const searchedVideos = useSelector((store) => store.search.suggestedVideos);
  
if(!searchedVideos) return null;
console.log(searchedVideos[0])
  
  return (
    <div>
      <div>
        <img alt="thumbnail" src={searchedVideos[0].snippet?.thumbnails?.default}></img>
      </div>
    </div>
  );
};

export default SearchedVideos;
