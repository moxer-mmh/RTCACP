import React, { useState, useEffect } from "react";
import "./Body.css";
import Checkmark from "../../Assets/checkmark--outline.svg";
import TagCloud from "TagCloud";

function Body() {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "Comunication",
        "Project",
        "Document",
        "Collaboration",
        "Management",
        "Editing",
        "Chat",
        "Features",
        "Real-time",
        "Team",
        "Review",
        "Task",
        "File",
        "Integration",
        "Workflow",
      ];
      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //here to add feedback to the data base but not now
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setFeedback("");
    setName("");
    setIsPopupVisible(false);
  };

  return (
    <div className="Body">
      <div>Blog</div>
      <div className="News">
        <div className="news-container">
          <span className="tagcloud"></span>
        </div>
      </div>
      <div className="feedback">
        <form onSubmit={(e) => handleSubmit(e)}>
          <fieldset className="feedback-container">
            <h2 className="introduction">Leave a Feedback</h2>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name (optional)"
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
          <h3>Thanks {name} for leaving a Feedback!</h3>
          <button onClick={handleClosePopup}>Ok</button>
        </div>
      )}
    </div>
  );
}

export default Body;
