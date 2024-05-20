import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/configSlice";
import {
  HAMBURGER_URL,
  YOUTUBE_ICON_URL,
  YOUTUBE_SEARCH_SUGGESTION_API,
} from "../utils/constants";
import { addSuggestedVideo, cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchSuggestion, setSearchSuggestion] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const handleHamburgerMenu = () => {
    dispatch(toggleSidebar());
  };

  const getSuggestedVideo = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchSuggestion);
    if (!data.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await data.json();

    dispatch(addSuggestedVideo(json.items));
  
  };

  useEffect(() => {
    getSuggestedVideo();
  }, []);

  const getSearchSuggestion = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/http://suggestqueries.google.com/complete/search?client=firefox&engine=youtube&ds=yt&q=${searchInput}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setSuggestions(json[1]);
      dispatch(
        cacheResults({
          [searchInput]: json[1],
        })
      );
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };
  useEffect(() => {
    // Debounce the API call
    const timer = setTimeout(() => {
      if (searchCache[searchInput]) {
        setSuggestions(searchCache[searchInput]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    // Cleanup the timeout on component unmount or searchInput change
    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex p-2 m-2 col-span-1">
        <img
          onClick={handleHamburgerMenu}
          className="h-14 cursor-pointer"
          alt="hamburger-menu"
          src={HAMBURGER_URL}
        ></img>
        <a href="/">
          <img
            className="h-8 mt-2 ml-2"
            alt="youtube-logo"
            src={YOUTUBE_ICON_URL}
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-10 mt-5 ">
        <div>
          <input
            value={searchInput}
            className="w-1/2 p-3 border border-gray-400 rounded-l-full"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onFocus={() => setShowSuggestion(true)}
            // Added a small delay to the onBlur event to ensure the click event on the suggestion is registered before the suggestions are hidden.
            // This delay is implemented using setTimeout.
            onBlur={() => setTimeout(() => setShowSuggestion(false), 100)}
          ></input>
          <button className="bg-gray-200 px-5 py-3 mr-2 border border-gray-200 rounded-r-full">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute bg-white w-[34%] p-3 mx-2 text-lg shadow-lg z-50">
            <ul>
              {suggestions.map((suggestion) => (
                <a href="/search" key={suggestion}>
                  <li
                    onClick={() => setSearchSuggestion(suggestion)}
                    className="py-2 m-1 font-bold hover:bg-gray-200"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>{" "}
                    {suggestion}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 m-2">
        <img
          className="h-10"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        ></img>
      </div>
    </div>
  );
};

export default Head;
