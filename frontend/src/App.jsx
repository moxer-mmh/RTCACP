import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import AuthPage from "./Pages/AuthPage";
import AppPage from "./Pages/AppPage";

import "./styles/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/app/*" element={<AppPage />} />
      </Routes>
    </>
  );
}

export default App;
