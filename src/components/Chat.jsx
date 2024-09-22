import React from "react";
import Chattery from "./Chattery";
import ProfileBar from "./ProfileBar";

function Chat({ type, onTypeChange }) {
  return (
    <div
      id="chat"
      className="sticky top-0 flex h-screen w-full flex-col overflow-y-auto p-2"
    >
      <ProfileBar />
      <Chattery onTypeChange={onTypeChange} type={type} />
    </div>
  );
}

export default Chat;
