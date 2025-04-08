import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Blue from "./components/Blue.jsx";
import Red from "./components/Red.jsx";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/Blue">Blue</Link>
        <Link to="/Red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blue" element={<Blue />} />
          <Route path="/Red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
