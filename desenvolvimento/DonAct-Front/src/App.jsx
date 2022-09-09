import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/pages/HomePage";
import Login from "../src/pages/LoginPage";
import Choice from "../src/pages/ChoicePage";
import SignUp from "./pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/choice" element={<Choice />} />
            <Route path="/ong" element={<SignUp />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;