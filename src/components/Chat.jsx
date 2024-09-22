import React from "react";
import Chattery from "./Chattery";
import ProfileBar from "./ProfileBar";

function Chat({ type, onTypeChange }) {
  return (
    <div
      id="chat"
      className="sticky top-0 flex h-screen sm-h-screen70 w-full flex-col overflow-y-auto p-2"
    >
      <ProfileBar />
      <Chattery onTypeChange={onTypeChange} type={type} />
      <style>
        {`
          @media (max-width: 767px) {
              .sm-h-screen70 {
                height:70vh;
              }
          }
          `}
      </style>
    </div>
    
  );
}

export default Chat;
