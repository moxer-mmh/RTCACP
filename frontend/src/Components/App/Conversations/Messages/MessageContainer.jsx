/* eslint-disable react/prop-types */
import React from "react";
import Messages from "./Messages";
import { FaArrowLeft } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BiConversation } from "react-icons/bi";

function MessageContainer({ conversation, onReturnToSidebar }) {
  if (!conversation) {
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
        <span className="label-text text-[#333333] font-bold mr-2">To:</span>
        <span className="text-[#333333] font-bold">
          {conversation.username}
        </span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Messages />
      </div>
      <form className="flex items-center p-4 relative">
        <input
          type="text"
          className="flex-1 bg-[#f5f5f5] p-2 rounded-lg pr-10" // Add padding-right for the button
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="absolute right-6 top-1/2 transform -translate-y-1/2 rounded-full" // Position the button absolutely
        >
          <FiSend className="text-[#333333]" size={24} />
        </button>
      </form>
    </div>
  );
}

export default MessageContainer;
