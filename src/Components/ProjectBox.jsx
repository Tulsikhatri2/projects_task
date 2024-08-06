import React from "react";
import { Box, Button } from "@mui/material";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject } from "../Redux/ProjectsCRUD/dataSlice";
import { useNavigate } from "react-router-dom";

const ProjectBox = () => {
  const { projectsList, todosCount } = useSelector((state) => state.data);
  console.log(projectsList, "projects");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (projectsList?.length === 0) {
    return (
      <>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            marginLeft: "-6vw",
            marginTop: "5vh",
          }}
        >
          <h4>Add some projects...</h4>
        </Box>
      </>
    );
  }

  function handleFeatures(p_id) {
    navigate(`/features/${p_id}`);
  }

  function handleDeleteProject(id) {
    dispatch(deleteProject(id));
  }
  return (
    <>
      {projectsList?.map((item, index) => {
        return (
          <>
            <Box
              key={index}
              sx={{
                width: "17%",
                height: "30%",
                backgroundColor: "#fff",
                margin: "2vh",
                borderRadius: "2vh",
                boxShadow: "inset 0px 0px 10px #000",
                cursor: "pointer",
                paddingLeft: "1vh",
              }}
            >
              <p style={{ marginLeft: "10px", marginTop: "1vh" }}>
                {item.title}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "6vw",
                }}
              >
                <Button
                  sx={{
                    height: "3vh",
                    backgroundColor: "#0F1423",
                    color: "white",
                    marginLeft: "10px",
                    fontSize: "1.5vh",
                    "&:hover": {
                      backgroundColor: "#BCC1BA",
                      color: "#0F1423",
                      fontWeight: "bold",
                    },
                  }}
                  onClick={() => {
                    handleFeatures(item.id);
                  }}
                >
                  Feature
                </Button>
                <Button
                  sx={{
                    height: "3vh",
                    backgroundColor: "#0F1423",
                    color: "white",
                    marginLeft: "10px",
                    fontSize: "1.5vh",
                    marginTop: "1vh",
                    "&:hover": {
                      backgroundColor: "#BCC1BA",
                      color: "#0F1423",
                      fontWeight: "bold",
                    },
                  }}
                  onClick={() => {
                    handleFeatures(item.id);
                  }}
                >
                  Todos: {todosCount}
                </Button>
              </div>
              <p
                style={{
                  textAlign: "right",
                  lineHeight: "0px",
                  diaplay: "flex",
                  flexDirection: "row",
                  marginTop: "-3vh ",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "3vh",
                    color: "#216E45",
                    marginRight: "1vw",
                  }}
                >
                  <BiEditAlt />
                </span>
                <span
                  style={{ fontSize: "3vh", color: "red", marginRight: "1vw" }}
                >
                  <RiDeleteBin6Line
                    onClick={() => {
                      handleDeleteProject(item.id);
                    }}
                  />
                </span>
              </p>
            </Box>
          </>
        );
      })}
    </>
  );
};

export default ProjectBox;
