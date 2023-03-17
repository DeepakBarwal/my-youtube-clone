import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  /**
   * searchCache
   * {
   *    "iphone": ["iphone"]
   * }
   */

  useEffect(() => {
    // make an api call after every keypress
    // but if the difference between 2 API calls is < 200ms, then decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      // update cache
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png?f=webp&w=256"
          onClick={() => toggleMenuHandler()}
        />

        <a href="/">
          <img
            className="h-8 mx-5"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>

      <div className="col-span-10 relative">
        <div>
          <input
            className="w-1/2 p-2 pl-5 border border-gray-400 rounded-tl-full rounded-bl-full outline-none"
            type={"text"}
            placeholder={"Search"}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-tr-full rounded-br-full">
            🔍
          </button>
        </div>

        {showSuggestions && (
          <div className="bg-white py-2 px-5 w-1/2 shadow-lg rounded-lg border border-gray-100 absolute">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
