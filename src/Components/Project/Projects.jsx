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
import Features from "../Feature/Features"

const Projects = () => {
  
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
