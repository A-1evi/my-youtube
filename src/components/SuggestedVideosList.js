import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestedVideo } from "../utils/searchSlice";
import SearchedVideos from "./SearchedVideos";

const SuggestedVideosList = () => {
  const searchedVideos = useSelector((store) => store.search.suggestedVideos);
  const dispatch = useDispatch();
  const searchedKeyword = useSelector((store) => store.search.keyword);

  const getSuggestedVideo = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=AIzaSyC5-75EihhDdpALhAEOFSO2eZqomZUp9os&q=" +
        searchedKeyword
    );
    if (!data.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await data.json();

    dispatch(addSuggestedVideo(json.items));
  };

  useEffect(() => {
    getSuggestedVideo();
  }, []);

  return (
    <div>
      {searchedVideos &&
        searchedVideos.map((video) => (
          <div key={video}>
            {" "}
            <SearchedVideos data={video} />
          </div>
        ))}
    </div>
  );
};

export default SuggestedVideosList;
