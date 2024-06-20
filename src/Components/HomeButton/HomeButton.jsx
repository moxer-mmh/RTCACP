import "./HomeButton.css";
import Arrow from "../../assets/arrow-up-solid.svg";

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
