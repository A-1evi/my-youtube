import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeMenu } from "../utils/configSlice";
import { useSearchParams } from "react-router-dom";
import CommetsContainer from "./CommetsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  // eslint-disable-next-line

  useEffect(() => {
    dispatch(removeMenu());
  }, []);
  return (
    <div className="w-full">
      <div className=" px-5  ml-5 flex  ">
        <div className="">
          <iframe
            className="rounded-xl mt-14"
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <button className="bg-red-500 p-2 m-2 text-white">Subscribe</button>
          <button className="p-2 m-2 bg-gray-400">Like👍</button>
          <button className="bg-gray-400 p-2 m-2">Share </button>
        </div>
        <div className="ml-5  w-[30%]">
          <LiveChat />
        </div>
      </div>
      <div className="p-2 mx-8">
        <CommetsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
