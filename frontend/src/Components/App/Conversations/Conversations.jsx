import React from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./Messages/MessageContainer";
import useConversation from "../../../zustand/useConversation";

function Conversations() {
  const { selectedConversation, setSelectedConversation } = useConversation();

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
        <Sidebar />
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