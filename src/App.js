// src/App.js
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies.js"; // Add the .js extension
import Main from "./pages/Main.js"; // Add the .js extension
import Price from "./pages/Price.js"; // Add the .js extension
import Nav from "./components/Nav.js"; // Add the .js extension

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}
