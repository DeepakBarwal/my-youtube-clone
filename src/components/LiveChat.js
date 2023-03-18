import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[550px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((m, i) => (
            <ChatMessage key={i} name={m.name} message={m.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!liveMessage) return;
          dispatch(
            addMessage({
              name: "Deepak",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="border border-gray-300 outline-none p-1 pl-3 w-10/12 rounded-3xl"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="p-1 px-2 mx-2 bg-green-200 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
