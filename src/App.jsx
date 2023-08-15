import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import "./App.css"
import SignUp from "./screens/Signup";
import JoinUs from "./screens/JoinUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/joinUs" element={<JoinUs />} />
    </Routes>
  );
}

export default App;
