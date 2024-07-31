import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

import LandingPage from "./Pages/LandingPage";
import AuthPage from "./Pages/AuthPage";
import AppPage from "./Pages/AppPage";

import "./styles/App.css";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route
          path="/auth"
          element={authUser ? <Navigate to="/app/" /> : <AuthPage />}
        />
        <Route
          path="/app/*"
          element={authUser ? <AppPage /> : <Navigate to="/auth" />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
