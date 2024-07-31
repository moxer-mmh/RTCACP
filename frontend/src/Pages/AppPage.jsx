import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Components/App/Home/Home";
import Profile from "../Components/App/Profile/Profile";
import Chats from "../Components/App/Chats/Chats";
import Settings from "../Components/App/Settings/Settings";

function AppPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="chats/*" element={<Chats />} />
      <Route path="settings/*" element={<Settings />} />
    </Routes>
  );
}

export default AppPage;
