import React from "react";
import Projects from "./Components/Projects";
import { Route, Routes } from "react-router-dom";
import Features from "./Components/Features";
import Todos from "./Components/Todos";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/features/:p_id" element={<Features />} />
        <Route path="/todos/:f_id" element={<Todos />} />
      </Routes>
    </>
  );
};

export default App;
