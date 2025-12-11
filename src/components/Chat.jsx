import React from "react";
import Chattery from "./Chattery";
import ProfileBar from "./ProfileBar";

function Chat({ type, onTypeChange }) {
  return (
    <div
      id="chat"
      className="flex w-full min-h-0 flex-col overflow-hidden p-2 sm-h-screen70 md:sticky md:top-0 md:h-screen md:max-h-screen"
    >
      <ProfileBar />
      <Chattery onTypeChange={onTypeChange} type={type} />
      <style>
        {`
          @media (max-width: 767px) {
              .sm-h-screen70 {
                height:75vh;
              }
          }
          `}
      </style>
    </div>
  );
}

export default Chat;
