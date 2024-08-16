import React from "react";
import { Box, Button } from "@mui/material";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, editProject } from "../../Redux/ProjectsCRUD/Project/projectSlice";
import { useNavigate } from "react-router-dom";
import { projectTodoDelete } from "../../Redux/ProjectsCRUD/Todo/todoSlice";
import { projectFeatureDelete } from "../../Redux/ProjectsCRUD/Feature/featureSlice";
import { featurePage } from "../../Redux/ProjectsCRUD/Dashboard/dashboardSlice";

const ProjectBox = () => {
  const { projectList } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (projectList?.length === 0) {
    return (
      <>
        <Box className="blankScreen">
          <h4>Add some projects...</h4>
        </Box>
      </>
    );
  }

  function handleFeatures(pID) {
    dispatch(featurePage(true))
    navigate(`/dashboard/features/${pID}`);
  }

  function handleDeleteProject(id) {
    dispatch(deleteProject(id));
    dispatch(projectTodoDelete(id))
    dispatch(projectFeatureDelete(id))
  }

  function handleProjectEdit(project){
    dispatch(editProject(project))
  }

  return (
    <>
      {projectList?.map((item, index) => {
        return (
          <>
            <Box key={index} className="projectBox1">
              <p className="title">{item.title}</p>
              <div className="projectDiv">
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
                      cursor:"pointer"
                    },
                  }}
                  onClick={() => {
                    handleFeatures(item.id);
                  }}
                >
                  Feature
                </Button>
              </div>
              <p className="projectParagraph">
                <span className="projectSpan1">
                  <BiEditAlt  onClick={()=>handleProjectEdit(item)}/>
                </span>
                <span className="projectSpan2">
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
