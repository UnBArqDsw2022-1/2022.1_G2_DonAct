import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Choice from "../src/pages/Choice";
import SignUpOng from "./pages/SignUpOng";
import DashDonor from "./pages/DashDonor";
import SignUpDonor from "./pages/SignUpDonor";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/choice" element={<Choice />} />
            <Route path="/donor" element={<SignUpDonor />} />
            <Route path="/donor/dash" element={<DashDonor />}/>
            <Route path="/ong" element={<SignUpOng />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;