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
import Dashboard from "./Components/Dashboard/Dashboard";
import { useSelector } from "react-redux";

const App = () => {
  const {isLogged} = useSelector(state=>state.dashboard)
  return (
    <>
    {isLogged?<Dashboard/>:""}
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/dashboard/projects" element={<Projects />} />
        <Route path="/dashboard/features/:pID" element={<Features />} />
        <Route path="/dashboard/todos/:fID/:pID" element={<Todos />} />
        <Route path="/registrationSuccess" element={<SuccessfulRegistraion/>}/>
        {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
        {/* <Route path="/dashboard/:category" element={<Dashboard/>}/> */}
      </Routes>
      <ToastContainer/>
    </>
  );
};

export default App;
