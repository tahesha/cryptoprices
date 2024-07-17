// src/index.js
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App.js"; // Add the .js extension
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
