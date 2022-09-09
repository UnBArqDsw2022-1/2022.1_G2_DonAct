import React from "react";

import AppRoutes from "./routes";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <div className="outer">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
