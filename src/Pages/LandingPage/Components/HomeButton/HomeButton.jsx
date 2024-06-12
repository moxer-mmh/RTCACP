import Arrow from '../../Assets/arrow-up-solid.svg';
import './HomeButton.css'; // Import the CSS file

const HomeButton = () => {
  return (
    <div className="iconbutton">
      <a href="">
        <img src={Arrow} alt="home" />
      </a>
    </div>
  );
}

export default HomeButton;
