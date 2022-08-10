import React from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "../src/pages/Home"
import Login from "../src/pages/Login"
import "./App.css"

function App() {
	return (
		<BrowserRouter>
     <div className="App">
        <div className="outer">    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
	);
}

export default App;
