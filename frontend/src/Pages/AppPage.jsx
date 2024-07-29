import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Components/App/Home/Home";
import Profile from "../Components/App/Profile/Profile";
import Conversations from "../Components/App/Conversations/Conversations";
import Settings from "../Components/App/Settings/Settings";

function AppPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="conversations/*" element={<Conversations />} />
      <Route path="settings/*" element={<Settings />} />
    </Routes>
  );
}

export default AppPage;
