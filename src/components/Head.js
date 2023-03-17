import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png?f=webp&w=256"
        />

        <img
          className="h-8 mx-5"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>

      <div className="col-span-10">
        <input
          className="w-1/2 p-2 border border-gray-400 rounded-tl-full rounded-bl-full outline-none"
          type={"text"}
          placeholder={"Search"}
        />
        <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-tr-full rounded-br-full">
          🔍
        </button>
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
