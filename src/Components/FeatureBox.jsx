import React from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteFeature } from "../Redux/ProjectsCRUD/Feature/featureSlice";
import { useNavigate, useParams } from "react-router-dom";
import { editingFeature } from "../Redux/ProjectsCRUD/Feature/featureSlice";
import { featureTodoDeleted } from "../Redux/ProjectsCRUD/Todo/todoSlice";

const FeatureBox = ({ projectFeature }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {pID} = useParams()
  // console.log(pID, "featureprojectID")

  if (projectFeature?.length === 0) {
    return (
      <>
        <Box className="blankScreen">
          <h4>Add some features...</h4>
        </Box>
      </>
    );
  }

  function handleDeleteFeature(id) {
    dispatch(deleteFeature(id));
    dispatch(featureTodoDeleted(id))
  }

  function handleTodos(fID) {
    navigate(`/todos/${fID}/${pID}`);
  }

  const handleFeatureEdit = (feature) => {
    console.log("121332")
    dispatch(editingFeature(feature))
  }

  return (
    <>
      {projectFeature?.map((item) => {
        return (
          <>
            <Box className="projectBox1">
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
                  handleTodos(item.id);
                }}
              >
                Todos
              </Button>
              </div>
              <p className="projectParagraph">
                <span className="projectSpan1">
                  <BiEditAlt
                   onClick={()=>handleFeatureEdit(item)}
                   />
                </span>
                <span className="projectSpan2">
                  <RiDeleteBin6Line onClick={() => handleDeleteFeature(item.id)}/>
                </span>
              </p>
            </Box>
          </>
        );
      })}
    </>
  );
};

export default FeatureBox;
