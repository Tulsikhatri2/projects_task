import React from "react";
import "./Components/Styling.css"
import Projects from "./Components/Projects";
import { Route, Routes } from "react-router-dom";
import Features from "./Components/Features";
import Todos from "./Components/Todos";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/features/:pID" element={<Features />} />
        <Route path="/todos/:fID/:pID" element={<Todos />} />
      </Routes>
      <ToastContainer/>
    </>
  );
};

export default App;
