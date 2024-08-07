import React from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteFeature } from "../Redux/ProjectsCRUD/dataSlice";
import { useNavigate } from "react-router-dom";
import { editFeature } from "../Redux/ProjectsCRUD/Feature/featureSlice";

const FeatureBox = ({ projectFeature }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  }

  function handleTodos(f_id) {
    navigate(`/todos/${f_id}`);
  }

  function handleFeatureEdit(feature){
    dispatch(editFeature(feature))
  }

  return (
    <>
      {projectFeature?.map((item) => {
        return (
          <>
            <Box className="projectBox1">
              <p className="title">{item.title}</p>

              <Button
                sx={{
                  height: "4vh",
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
                  handleTodos(item.id);
                }}
              >
                Todos:
              </Button>
              <p className="projectParagraph">
                <span className="projectSpan1">
                  <BiEditAlt onClick={handleFeatureEdit(item)}/>
                </span>
                <span
                  className="projectSpan2"
                  onClick={() => handleDeleteFeature(item.id)}
                >
                  <RiDeleteBin6Line />
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
