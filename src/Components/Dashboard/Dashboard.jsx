import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PiListPlusFill } from "react-icons/pi";
import Projects from "../Project/Projects";
import { useDispatch, useSelector } from "react-redux";
import Features from "../Feature/Features";
import Todos from "../Todo/Todos";
import { projectPage } from "../../Redux/ProjectsCRUD/Dashboard/dashboardSlice";


const Dashboard = () => {

    const {isFeature,isProject, isTodo} = useSelector((state)=>state.dashboard)
    const dispatch = useDispatch()

    const dataInfo = [
        "Today's Task",
        "Upcoming Task",
        "Personal Task",
        "Professional Task",
        "Most Important Task",
        "Completed Task",
        "Trashed",
      ];

      const navigate = useNavigate()

      const handlePageRender = () => {
        dispatch(projectPage(true))
      }
    
  return (
    <>
      <Box className="dashboard">
        <Box className="dashboardNavbar">
          <Box className="profileImage"></Box>
          <Box className="profileInfo">
            <p style={{ fontWeight: "bold", fontSize: "3vh", color: "black" }}>
              Priya Soni
            </p>
            <p>priya123@gmail.com</p>
            <p>6789056437</p>
          </Box>
          <Box className="dataInfo">
            {dataInfo.map((item) => {
              return (
                <>
                  <Box className="dataList">
                    <p style={{ marginTop: "1.5vh" }}>{item}</p>
                  </Box>
                </>
              );
            })}
          </Box>
          <Box className="logoutBox">
            <Button
              variant="contained"
              sx={{
                fontFamily: "'Trebuchet MS'",
                fontSize: "2vh",
                backgroundColor: "maroon",
                fontWeight: "bold",
                "&:hover": {
                  color: "maroon",
                  backgroundColor: "white",
                },
              }}
              onClick={() => navigate("/")}
            >
              Logout
            </Button>
          </Box>
        </Box>

        <Box className="contentInfo">
          <Box className="dashboardHeading">
            <p>
              <PiListPlusFill
                style={{ fontSize: "5vh", marginLeft: "2vw", marginTop: "1vh" }}
              />
            </p>
            <p style={{ marginTop: "4vh", fontWeight: "bold" }}>TodoTask</p>
            <p
              style={{
                marginTop: "4vh",
                marginLeft: "24vw",
                fontWeight: "bold",
              }}
            >
              <u>Pirya's Dashboard</u>
            </p>
          </Box>

          <Box className="content">
            {isProject?<Projects/>:
            (isFeature?<Features/>:
            (isTodo?<Todos/>:
                <Button variant="contained" 
                sx={{
                   fontFamily: "'Trebuchet MS'",
                   fontSize: "2vh",
                   backgroundColor:"purple",
                   fontWeight: "bold",
               "&:hover":{
                   backgroundColor:"white",
                   color:"purple"
               }}}
               onClick={handlePageRender}
                   >Add your projects</Button>
            )   
            )}
            
            {/* {page==`featurePage`?<Features/>:
            (page==`todoPage`?<Todos/>:<Projects/>)
            } */}
            {/* <Projects/> */}
          </Box>

        </Box>
    </Box> 
    </>
  );
};

export default Dashboard;
