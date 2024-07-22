// components/ChatPopup.jsx
import React, { useState } from "react";
import classNames from "classnames";

function ChatPopup({ useShowChat, themes }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "other" },
    { id: 2, text: "Hi there!", sender: "user" },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: currentMessage,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setCurrentMessage("");
    }
  };

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-black rounded-xl w-72 sm:w-80 flex flex-col">
      <div
        style={{ backgroundColor: themes.popupColorSecondary || "#2563EB" }}
        className="flex justify-between items-center rounded-t-xl"
      >
        <div className="p-3 text-white text-lg">{themes.storeName} Chat</div>
        <button onClick={useShowChat} className="text-white p-3 text-lg">
          X
        </button>
      </div>
      <div
        style={{ backgroundColor: themes.popupColorPrimary || "#2563EB" }}
        className="p-4 bg-white flex-grow flex flex-col rounded-b-xl"
      >
        <div className="flex-grow mb-2 overflow-y-auto max-h-60">
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                wordWrap: "break-word",
                wordBreak: "break-word",
                maxWidth: "70%",
              }}
              className={classNames("text-sm p-2 rounded-xl my-3 max-w-full", {
                " bg-gray-200 border border-gray-500 text-black ml-auto text-justify":
                  message.sender === "user",
                "bg-gray-100 border border-gray-500 text-black mr-auto text-justify":
                  message.sender === "other",
              })}
            >
              <p style={{ color: themes.senderTextColor || "#2563EB" }}>
                {message.sender === "user" ? "You" : "Your-store Assistance"}
              </p>
              {message.text}
            </div>
          ))}
        </div>
        <input
          value={currentMessage}
          onChange={handleMessageChange}
          placeholder="Type your message here!"
          className="focus:outline-none text-sm w-full h-20 p-2 border border-gray-300 rounded mb-2 text-black"
        />
        <button
          style={{ backgroundColor: themes.sendButtonColor || "#3B82F6" }}
          onClick={sendMessage}
          className="text-[1rem] w-full h-10 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPopup;
