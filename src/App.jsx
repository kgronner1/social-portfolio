import React, { useState } from "react";

import Chat from "./components/Chat";
import PortfolioScroll from "./components/PortfolioScroll";

// TO DO:
// mobile

function App() {
  const [type, setType] = useState("web");

  const handleTypeChange = (newType) => {
    setType(newType);
  };

  return (
    <div
      id="page"
      className="flex h-full min-h-screen w-full flex-col justify-between md:flex-row bg-sand"
    >
      <div className="flex flex-1 md:w-1/2 md:flex-initial">
        <PortfolioScroll type={type}></PortfolioScroll>
      </div>
      <div className="flex flex-1 md:w-1/2 md:flex-initial">
        <Chat onTypeChange={handleTypeChange} type={type}></Chat>
      </div>
    </div>
  );
}

export default App;
