import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Conversation from "./Conversation";
import useGetConversations from "../../../Hooks/useGetConversations";
import useConversation from "../../../zustand/useConversation";
import toast from "react-hot-toast";

function Sidebar() {
  const { loading, conversations } = useGetConversations();
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = conversations.find((c) =>
      c.userName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found with that username");
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#ccc] w-full p-4 lg:p-6">
      <div className="flex justify-between items-center mb-4 lg:mb-6">
        <div className="flex items-center">
          <Link
            to="/app"
            className="flex items-center justify-center rounded-full w-10 h-10 bg-[#333333] text-[#f5f5f5] mr-3"
          >
            <FaArrowLeft size={20} />
          </Link>
          <h2 className="text-[#333333] font-bold text-lg lg:text-xl">Chats</h2>
        </div>
      </div>
      <form
        className="flex items-center justify-center gap-2 w-full mb-4 lg:mb-6"
        onSubmit={handleSubmit}
      >
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-4 pr-10 rounded-full bg-[#f5f5f5] text-[#333333] border border-[#333333] focus:outline-none focus:ring-2 focus:ring-[#c2c2c2] focus:border-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#333333]"
          >
            <FaSearch size={18} />
          </button>
        </div>
      </form>
      <div className="w-full border-t border-[#333333] mb-4 lg:mb-6" />
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
          />
        ))}
        {loading && <span className="loading loading-spinner mx-auto"></span>}
      </div>
    </div>
  );
}

export default Sidebar;
