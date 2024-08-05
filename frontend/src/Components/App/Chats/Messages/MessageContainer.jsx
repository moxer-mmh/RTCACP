import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import { FaArrowLeft } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BiConversation } from "react-icons/bi";
import useConversation from "../../../../zustand/useConversation";
import useSendMessage from "../../../../Hooks/useSendMessage";

function MessageContainer({ onReturnToSidebar }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  if (!selectedConversation) {
    return (
      <div className="hidden md:flex flex-col w-full h-full bg-[#333333] justify-center items-center text-[#f5f5f5]">
        <h1 className="font-bold text-[#f5f5f5]">
          {" "}
          Select a conversation to start chatting
        </h1>
        <BiConversation className="mt-4 text-[#f5f5f5]" size={64} />
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full h-full bg-[#333333]">
      <div className="sticky top-0 z-10 bg-[#ccc] px-4 py-4 flex items-center">
        <button onClick={onReturnToSidebar} className="md:hidden mr-4">
          <FaArrowLeft className="text-[#333333]" size={24} />
        </button>
        <span className="label-text text-[#333333] font-bold mr-2 pt-0.5 md:pt-1">
          To:
        </span>
        <span className="text-[#333333] font-bold">
          {selectedConversation.fullName}
        </span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Messages />
      </div>
      <form className="flex items-center p-4 relative" onSubmit={handleSubmit}>
        <input
          type="text"
          className="flex-1 bg-[#f5f5f5] text-[#333333] p-2 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-[#c2c2c2] focus:border-transparent"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-6 top-1/2 transform -translate-y-1/2 rounded-full"
        >
          {loading ? (
            <div className="loading loading-spinner mx-auto"></div>
          ) : (
            <FiSend className="text-[#333333]" size={24} />
          )}
        </button>
      </form>
    </div>
  );
}

export default MessageContainer;
