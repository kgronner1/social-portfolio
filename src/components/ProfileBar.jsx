import React from "react";
import KylerImage from "../assets/chat/Kyler.png";

function ProfileBar() {
  return (
    <div className="flex justify-between bg-white p-4 shadow-md sm:items-center rounded-lg">
      <div className="relative flex items-center space-x-4">
        <div className="relative">
          <span className="absolute bottom-0 right-0 text-green-500">
            <svg width="20" height="20">
              <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
            </svg>
          </span>
          <img
            src={KylerImage}
            alt=""
            className="h-10 w-10 rounded-full sm:h-16 sm:w-16"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <div className="mt-1 flex items-center text-2xl">
            <h2 className="text-2xl font-semibold">Kyler Gronner</h2>
          </div>
          <p className="text-lg">Developer</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileBar;
