import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const toggleSidebar = useSelector((store) => store.config.isSidebarOpen);
  //Early return

  return (
    <>
      {toggleSidebar && (
        <div className="w-52 shadow-lg p-2  ">
          <ul className="font-semibold py-2 px-4 text-xl ">
            <li className="py-2"><Link to={"/"}><i className="fa-solid fa-house"></i>  Home</Link></li>
            <li className="py-2"><i className="fa-solid fa-hashtag"></i> Shorts</li>
            <li className="py-2 cursor-pointer" ><i className="fa-solid fa-tower-broadcast"></i> Live</li>
          </ul>
          <h1 className="text-xl px-4 pt-5 font-semibold">Subsription</h1>
          <ul className="px-4 text-lg">
            <li className="py-2">Videos</li>
            <li className="py-2">Music</li>
            <li className="py-2">News</li>
            <li className="py-2">Sports</li>
          </ul>
          <h1 className="text-xl px-4 pt-5 font-semibold">Watch later</h1>
          <ul className="  px-4 text-lg">
            <li className="py-2">Videos</li>
            <li className="py-2">Music</li>
            <li className="py-2">News</li>
            <li className="py-2">Sports</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
