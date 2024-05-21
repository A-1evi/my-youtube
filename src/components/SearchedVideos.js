import React from 'react'

const SearchedVideos = ({snippet}) => {
  return (
    <div><div className="m-2 p-5 flex">
    <div className="m-2 p-2  flex rounded-lg">
      <img
        className=" h-52 shadow-lg"
        alt="thumbnail"
        src={snippet?.thumbnails?.high?.url}
      ></img>
      <div>
        <h1 className=" text-xl m-2 p-2 font-medium">{snippet?.title}</h1>

        <p className="text-md pt-2 px-2 m-2 font-bold">
          {snippet?.channelTitle}
        </p>
        <p className="p-2 m-2 text-xs">{snippet?.description}</p>
        <h1 className="bg-red-600 w-10 text-white  mx-4 px-1 items-center">
          {snippet?.liveBroadcastContent.toUpperCase()}
        </h1>
      </div>
    </div>
  </div>
);</div>
  )
}

export default SearchedVideos