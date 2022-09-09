import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Choice from "../src/pages/Choice";
import "./App.css";
import SignUp from "./pages/SignUp";
import Dash from "./pages/Dash"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/choice" element={<Choice />} />
            <Route path="/donor" element={<SignUp />} />
            <Route path="/listagem" element={<Dash/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
