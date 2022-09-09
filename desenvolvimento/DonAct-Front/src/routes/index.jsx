import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ChoicePage from "../pages/ChoicePage";
import SignUpPage from "../pages/SignUpPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/choice" element={<ChoicePage />} />
        <Route exact path="/donor" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
