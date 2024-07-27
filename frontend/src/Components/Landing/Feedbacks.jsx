import React, { useState } from "react";

import check from "../../assets/checkmark--outline.svg";

function Feedbacks() {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const addFeedback = (e) => {
    setFeedback(e.target.value);
  };

  const addName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setFeedback("");
    setName("");
    setIsPopupVisible(false);
  };

  return (
    <div id="feedback" className="flex justify-center items-center  bg-[#f5f5f5] p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#f5f5f5] p-8 rounded-lg shadow-md"
      >
        <fieldset>
          <h2 className="text-[#333333] text-2xl font-semibold mb-6">
            Leave a Feedback
          </h2>
          <input
            value={name}
            onChange={addName}
            type="text"
            placeholder="Name (optional)"
            className="w-full p-3 mb-4 border rounded-md border-[#333333] hover:border-[#c2c2c2] focus:border-[#c2c2c2] focus:ring-2 focus:ring-[#c2c2c2]"
          />
          <textarea
            value={feedback}
            onChange={addFeedback}
            placeholder="Write your feedback here..."
            className="w-full p-3 mb-4 border border-[#333333] hover:border-[#c2c2c2] rounded-md h-32 focus:border-[#c2c2c2] focus:ring-2 focus:ring-[#c2c2c2] "
          />
          <button type="submit" className="btn-primary w-full">
            Submit
          </button>
        </fieldset>
      </form>

      {isPopupVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-lg text-center">
            <img
              src={check}
              alt="Checkmark"
              className="w-16 h-16 mx-auto mb-4 "
            />
            <h3 className="text-xl font-semibold mb-4 text-[#333333]">
              Thanks {name} for leaving a Feedback!
            </h3>
            <button onClick={handleClosePopup} className="btn-primary">
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feedbacks;
