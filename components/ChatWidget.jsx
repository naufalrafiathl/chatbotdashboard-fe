import React from 'react';
import Image from 'next/image'
import ChatPopup from './ChatPopup';
import logo from '../public/logo.png'

const ChatWidget = ({ themes, isShowChat, toggleShowChat }) => {
    console.log("themes",themes)
  return (
    <>
      {isShowChat ? (
        <ChatPopup useShowChat={toggleShowChat} themes={themes} />
      ) : (
        <div className="flex fixed bottom-10 right-10">
          <div
            style={{ backgroundColor: themes.logoBgColor }}
            className="mr-2 rounded-xl flex-shrink-0"
          >
         
              <Image
                src={logo}
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                alt="Chat Widget Logo"
              />
          </div>
          <div
            onClick={toggleShowChat}
            style={{
              backgroundColor: themes.bgColor,
              color: themes.buttonTextColor,
            }}
            className="rounded-xl p-3 font-light text-[1rem] cursor-pointer"
          >
            <div>{themes.buttonText}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
