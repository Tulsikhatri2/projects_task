import { Box } from "@mui/material";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../Redux/ProjectsCRUD/dataSlice";

import ProjectBox from "./ProjectBox";
import { MdEdit } from "react-icons/md";

const Projects = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const dispatch = useDispatch();
  const { projectsList } = useSelector((state) => state.data);
  function handleSubmit() {
    dispatch(
      createProject({
        id: crypto.randomUUID(),
        title: projectTitle,
      })
    );
    setProjectTitle("");
  }

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#0F1423",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "80%",
            backgroundColor: "#BCC1BA",
            boxShadow: "0px 0px 30vh #000000",
            borderRadius: "1rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "15%",
              borderRadius: "1rem",
            }}
          >
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4vh",
                color: "#092523",
              }}
            >
              <span style={{ width: "40%", height: "50%", marginLeft: "7vw" }}>
                <u>Projects</u>
              </span>
              <span
                style={{
                  width: "60%",
                  height: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  label="Add Projects"
                  variant="filled"
                  sx={{
                    "& .MuiFilledInput-root": {
                      color: "#0F1423",
                      fontWeight: "bold",
                      backgroundColor: "#f4f4f4",
                      borderTopLeftRadius: "7px",
                      borderTopRightRadius: "7px",
                      height: "2.5rem",
                      width: "15rem",
                      fontSize: "2vh",
                      "&:before": {
                        borderColor: "#2C0B1F",
                        fontSize: "2vh",
                        color: "#0F1423",
                      },
                      "&:after": {
                        borderColor: "#2C0B1F",
                        fontSize: "2vh",
                        height: "2.5rem",
                        width: "15rem",
                        color: "#0F1423",
                      },
                    },
                    "& .MuiInputLabel-filled": {
                      color: "#AEABA8",
                      fontSize: "2vh",
                      "&.Mui-focused": {
                        color: "#0F1423",
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
                  +
                </Button>
              </span>
            </h3>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "65%",
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
              flexWrap: "wrap",
              marginLeft: "6vw",
              // backgroundColor:"red"
            }}
          >
            <ProjectBox />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "15%",
              display: "flex",
              alignItems: "right",
              justifyContent: "right",
              marginLeft: "-7vw",
            }}
          >
            <TextField
              label="Update Projects"
              variant="filled"
              sx={{
                "& .MuiFilledInput-root": {
                  color: "#0F1423",
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
                  color: "#0F1423",
                  fontSize: "2vh",
                  "&.Mui-focused": {
                    color: "#000",
                    fontSize: "2vh",
                  },
                },
              }}
              // value={projectTitle}
              // onChange={(e) => setProjectTitle(e.target.value)}
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
              <MdEdit />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
