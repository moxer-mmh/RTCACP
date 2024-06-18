import Arrow from "../../assets/arrow-up-solid.svg";
import "./HomeButton.css";

function HomeButton() {
  return (
    <div className="iconbutton">
      <a href="#">
        <img src={Arrow} alt="home" />
      </a>
    </div>
  );
}

export default HomeButton;
