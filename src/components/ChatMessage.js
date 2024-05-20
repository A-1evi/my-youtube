import React from "react";


const ChatMessage = ({name, message}) => {
  

  return (
    <div >
       
      <div className="p-2 m-2 flex items-center ">
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        ></img>
        <span className="px-2 font-medium">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
