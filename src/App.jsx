import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import Auth from "./Components/Pages/Auth/Auth";
import Home from "./Components/Pages/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav /> <Body /> <Footer />
            </>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
