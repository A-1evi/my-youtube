import React from "react";

const SearchedVideos = (props) => {
  console.log(props);
  return (
    <div>
      <div className="m-2 p-5 flex">
        <div className="m-2 p-2  flex rounded-lg">
          <img
            className="w-[480px] h-[360px] shadow-lg"
            alt="thumbnail"
            src={props.data.snippet?.thumbnails?.high?.url}
          ></img>
          <div>
            <h1 className=" text-3xl mt-6 ml-2 p-2 font-medium">
              {props.data.snippet?.title}
            </h1>

            <p className="text-md pt-2 px-2 m-2 font-bold">
              {props.data.snippet?.channelTitle}
            </p>
            <p className="p-2 m-2 text-xs">{props.data.snippet?.description}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SearchedVideos;
