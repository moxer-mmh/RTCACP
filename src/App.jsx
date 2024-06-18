import Nav from "./Components/Nav";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import Auth from "./Components/Pages/Auth/Auth";
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
      </Routes>
    </>
  );
}

export default App;
