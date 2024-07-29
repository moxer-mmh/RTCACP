import React from "react";

// eslint-disable-next-line react/prop-types
function Conversation({ onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className="flex gap-2 items-center hover:bg-[#444444] rounded p-2 py-1 cursor-pointer"
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://cdn.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-[#333333] ">username</p>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-[#333333] mb-6" />
    </>
  );
}

export default Conversation;
