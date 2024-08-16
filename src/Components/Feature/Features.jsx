import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FeatureBox from "./FeatureBox";
import { useParams } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
import { BiEditAlt } from "react-icons/bi";
import { createFeature, updateFeature } from "../../Redux/ProjectsCRUD/Feature/featureSlice";
import Dashboard from "../Dashboard/Dashboard";

const Features = () => {
  const { featureList, editFeature } = useSelector((state) => state.features);
  const { pID } = useParams();
  const [featureTitle, setFeatureTitle] = useState("");
  const dispatch = useDispatch();

  const projectFeature = featureList?.filter((item) => item.projectID === pID);

  useEffect(() => {
    setFeatureTitle(editFeature?.feature?.title);
  }, [editFeature]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!featureTitle) {
      toast.error("Add some name for your feature!", {
        position: "top-center",
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
      if (!editFeature?.isEdit) {
        dispatch(
          createFeature({
            id: crypto.randomUUID(),
            title: featureTitle,
            projectID: pID,
          })
        );
        toast.info("Feature added sucessfully!", {
          position: "top-center",
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
          updateFeature({
            id: editFeature.feature.id,
            title: featureTitle,
            projectID: editFeature.feature.projectID,
          })
        );
        toast.info("Feature updated sucessfully!", {
          position: "top-center",
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
      setFeatureTitle("");
    }
  }

  return (
    <>
           <Box className="contentHeadder">
              <p>Features</p>
              <Box className="projectsAdd">
                <TextField
                  label="Add Feature"
                  value={featureTitle}
                  onChange={(e) => setFeatureTitle(e.target.value)}
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
                  {editFeature?.isEdit ? (
                    <BiEditAlt style={{ fontSize: "3vh" }} />
                  ) : (
                    "+"
                  )}
                </Box>
              </Box>
            </Box>
            <Box className="projectsDisplay">
             <FeatureBox projectFeature={projectFeature}/> 
            </Box>
    </>
  );
};

export default Features;
