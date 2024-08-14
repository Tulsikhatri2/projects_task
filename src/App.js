import React from "react";
import "./Components/Styling.css"
import Projects from "./Components/Project/Projects";
import { Route, Routes } from "react-router-dom";
import Features from "./Components/Feature/Features";
import Todos from "./Components/Todo/Todos";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./Components/Login/LoginPage";
import Registration from "./Components/Login/Registration";
import SuccessfulRegistraion from "./Components/Login/SuccessfulRegistraion";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/features/:pID" element={<Features />} />
        <Route path="/todos/:fID/:pID" element={<Todos />} />
        <Route path="/registrationSuccess" element={<SuccessfulRegistraion/>}/>
      </Routes>
      <ToastContainer/>
    </>
  );
};

export default App;
