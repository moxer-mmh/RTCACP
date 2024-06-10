import React, { useState } from "react";
import "./Body.css";
import Checkmark from "../../Assets/checkmark--outline.svg";

function Body() {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //here to add feedback to the data base but not now
    setIsPopupVisible(true);

    setFeedback("");
    setName("");
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="Body">
      <div>Blog</div>
      <div>News</div>
      <div className="feedback">
        <form onSubmit={(e) => handleSubmit(e)}>
          <fieldset className="feedback-container">
            <h2 className="introduction">Leave a Feedback</h2>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="feedback-input-name"
            />
            <br />
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
              className="feedback-textarea"
            />
            <button type="submit" className="feedback-button">
              Submit
            </button>
          </fieldset>
        </form>
      </div>

      {isPopupVisible && (
        <div className="popup">
          <img src={Checkmark} alt="Checkmark" />
          <h3>Thanks for leaving a recommendation!</h3>
          <button onClick={handleClosePopup}>Ok</button>
        </div>
      )}
    </div>
  );
}

export default Body;
