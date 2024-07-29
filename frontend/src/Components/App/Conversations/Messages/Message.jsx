import React from "react";

function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://cdn.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="avatar"
          />
        </div>
      </div>
      <div className="chat-bubble text-[#333333] bg-[#f5f5f5] ">
        hi whats up hi whats up hi whats uphi whats up
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:50
      </div>
    </div>
  );
}

export default Message;
