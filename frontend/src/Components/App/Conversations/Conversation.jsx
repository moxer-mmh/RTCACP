import React from "react";

import useConversation from "../../../zustand/useConversation";

function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-[#444444] rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-[#333333]" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p
              className={`font-bold text-[#333333] ${
                isSelected ? "text-[#f5f5f5]" : ""
              }`}
            >
              {conversation.userName}
            </p>
          </div>
        </div>
      </div>
      {!lastIdx && (
        <div className="w-full border-t border-[#333333] mb-4 lg:mb-6" />
      )}
    </>
  );
}

export default Conversation;
