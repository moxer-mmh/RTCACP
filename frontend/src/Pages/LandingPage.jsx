import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Components/Landing/Header";
import Home from "../Components/Landing/Home";
import Services from "../Components/Landing/Services";
import Feedbacks from "../Components/Landing/Feedbacks";
import Footer from "../Components/Landing/Footer";

function LandingPage() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Feedbacks />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default LandingPage;
