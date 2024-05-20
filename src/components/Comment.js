import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex p-2 mx-5 bg-gray-100  my-2">
      <div className="w-8 mx-4 ">
        <img
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        ></img>
      </div>
      <div>
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
