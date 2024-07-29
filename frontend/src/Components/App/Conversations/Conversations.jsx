import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./Messages/MessageContainer";

function Conversations() {
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleReturnToSidebar = () => {
    setSelectedConversation(null);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`${
          selectedConversation ? "hidden" : "flex"
        } md:flex w-full md:w-1/5 h-full`}
      >
        <Sidebar onConversationSelect={handleConversationSelect} />
      </div>

      <div
        className={`${
          selectedConversation ? "flex" : "hidden"
        } md:flex flex-col w-full h-full`}
      >
        <MessageContainer
          conversation={selectedConversation}
          onReturnToSidebar={handleReturnToSidebar}
        />
      </div>
    </div>
  );
}

export default Conversations;
