import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(
      () =>
        dispatch(
          addMessage({
            name: generateRandomName(),
            message: "This is my project youtube clone😐",
          })
        ),
      1500
    );

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <h1 className="p-2 my-2  font-bold text-2xl  bg-white">Live chat</h1>
      <div className="bg-gray-100 h-[650px] border border-black bo rounded-lg overflow-y-scroll flex flex-col-reverse ">
        {chatMessages.map((c ,i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
    </>
  );
};

export default LiveChat;
