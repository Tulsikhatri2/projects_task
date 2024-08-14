import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createProject, updateProject } from "../../Redux/ProjectsCRUD/Project/projectSlice";
import { toast, Zoom } from "react-toastify";
import ProjectBox from "./ProjectBox";
import { BiEditAlt } from "react-icons/bi";
import { PiListPlusFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const dataInfo = [
    "Today's Task",
    "Upcoming Task",
    "Personal Task",
    "Professional Task",
    "Most Important Task",
    "Completed Task",
    "Trashed",
  ];
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState("");
  const { editProject } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    setProjectTitle(editProject?.project.title);
  }, [editProject]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!projectTitle) {
      toast.error("Add some name for your project!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    } else {
      if (editProject.isEdit) {
        dispatch(
          updateProject({
            id: editProject.project.id,
            title: projectTitle,
          })
        );
        toast.info("Project updated sucessfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      } else {
        dispatch(
          createProject({
            id: crypto.randomUUID(),
            title: projectTitle,
          })
        );
        toast.info("Project added sucessfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      }
      setProjectTitle("");
    }
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
                marginLeft: "28vw",
                fontWeight: "bold",
              }}
            >
              <u>Pirya's Dashboard</u>
            </p>
          </Box>
          <Box className="content">
            <Box className="contentHeadder">
              <p>Projects</p>
              <Box className="projectsAdd">
                <TextField
                  label="Add Project"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  InputProps={{
                    style: {
                      borderRadius: "4vh",
                      height: "7vh",
                      fontFamily: "'Trebuchet MS'",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "2vh",
                      marginTop: "-0.5vh",
                    },
                  }}
                />
                <Box className="addButton" onClick={handleSubmit}>
                  {editProject.isEdit ? (
                    <BiEditAlt style={{ fontSize: "3vh" }} />
                  ) : (
                    "+"
                  )}
                </Box>
              </Box>
            </Box>
            <Box className="projectsDisplay">
              <ProjectBox />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects;

{
  /* <Box className="boxProject1">
        <Box className="box2">
          <Box className="box3">
            <h3 className="headings">
              <span className="headingSpan1">
                <u>Projects</u>
              </span>
              <span className="headingSpan2">
                <TextField
                  label="Add Projects"
                  variant="filled"
                  sx={{
                    "& .MuiFilledInput-root": {
                      color: "#2C0B1F",
                      fontSize: "2vh",
                      fontWeight: "bold",
                      backgroundColor: "white",
                      borderTopLeftRadius: "7px",
                      borderTopRightRadius: "7px",
                      height: "2.5rem",
                      width: "15rem",

                      "&:before": {
                        borderColor: "#2C0B1F",
                        borderWidth: "1px",
                        fontWeight: "bold",
                        fontSize: "2vh",
                      },
                      "&:after": {
                        borderColor: "#2C0B1F",
                        borderWidth: "3px",
                        fontSize: "2vh",
                        height: "2.5rem",
                        width: "15rem",
                      },
                    },
                    "& .MuiInputLabel-filled": {
                      color: "#8C8B89",
                      fontSize: "2vh",
                      "&.Mui-focused": {
                        color: "#000",
                        fontSize: "2vh",
                      },
                    },
                  }}
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                />
                <Button
                  variant="contained"
                  sx={{
                    color: "#0F1423",
                    backgroundColor: "white",
                    marginLeft: "2vh",
                    height: "6vh",
                    fontSize: "4vh",
                    "&:hover": {
                      backgroundColor: "#0F1423",
                      color: "white",
                    },
                  }}
                  onClick={handleSubmit}
                >
                  {editProject.isEdit?<BiEditAlt style={{fontSize:"3vh"}}/>:"+"}
                </Button>
              </span>
            </h3>
          </Box>
          <Box className="box4">
            <ProjectBox />
          </Box>
        </Box>
      </Box> */
}
