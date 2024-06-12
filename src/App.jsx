import Footer from "./Pages/LandingPage/Components/Footer/Footer";
import Body from "./Pages/LandingPage/Components/Body/Body";
import Header from "./Pages/LandingPage/Components/Header/Header";
import HomeButton from "./Pages/LandingPage/Components/HomeButton/HomeButton";

function App() {
  return (
    <>
      <Header data-testid="header"  />
      <Body data-testid="body" />
      <Footer data-testid="footer" />
      <HomeButton data-testid="home-button" />
    </>
  );
}

export default App;
