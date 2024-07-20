import { useState, useEffect } from "react";
import "./Body.css";
import Checkmark from "../../assets/checkmark--outline.svg";
import TagCloud from "TagCloud";
import HomeButton from "../HomeButton/HomeButton";
import teamWork from "../../assets/teamWork.png"
import { Link } from "react-router-dom";

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
        radius: 350,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
    };
  }, []);

  function addFeedback(e) {
    setFeedback(e.target.value);
  }

  function addName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //here to add feedback to the data base but not now
    setIsPopupVisible(true);
  }

  function handleClosePopup() {
    setFeedback("");
    setName("");
    setIsPopupVisible(false);
  }

  return (
    <>
      <main className="Body">
        <div className="Header">
          <div className="teamWork">
            <section className="laSection">
              <div className="titleSec">
                Bridging teams together. one message at a time
              </div>
              <p className="slang">
                Stay connected and collaborate in real-time across web, mobile,
                and desktop with our all-in-one platform.
              </p>
              <Link className="getStarted" to={"/auth"}>Get Started</Link>
            </section>

            <div>
              <img src={teamWork} alt="Team Work" />
            </div>
          </div>
        </div>
        <div className="Blog" id="Blog">Blog</div>
        <div className="features" id="features">
          <div className="features-container">
            <span className="tagcloud"></span>
          </div>
        </div>
        <div className="feedback" id="feedback">
          <form id="form-feedback" onSubmit={(e) => handleSubmit(e)}>
            <fieldset className="feedback-container">
              <h2 className="introduction">Leave a Feedback</h2>
              <input
                value={name}
                onChange={(e) => addName(e)}
                type="text"
                placeholder="Name (optional)"
                className="feedback-input-name"
              />
              <br />
              <textarea
                value={feedback}
                onChange={(e) => addFeedback(e)}
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
      </main>
      <HomeButton />
    </>
  );
}

export default Body;
