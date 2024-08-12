import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { createFeature } from "../Redux/ProjectsCRUD/Feature/featureSlice";
import FeatureBox from "./FeatureBox";
import { useParams } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
import { BiEditAlt } from "react-icons/bi";
import {
  createFeature,
  featureCountUpdate,
  updateFeature,
} from "../Redux/ProjectsCRUD/Feature/featureSlice";

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
      <Box className="boxFeature1">
        <Box className="box2">
          <Box className="box3">
            <h3 className="headings">
              <span className="headingSpan1">
                <u>Features</u>
              </span>
              <span className="headingSpan2">
                <TextField
                  label="Add Features"
                  variant="filled"
                  sx={{
                    "& .MuiFilledInput-root": {
                      color: "#2C0B1F",
                      fontWeight: "bold",
                      backgroundColor: "#f4f4f4",
                      borderTopLeftRadius: "7px",
                      borderTopRightRadius: "7px",
                      height: "2.5rem",
                      width: "15rem",
                      "&:before": {
                        borderColor: "#2C0B1F",
                        borderWidth: "2px",
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
                  value={featureTitle}
                  onChange={(e) => setFeatureTitle(e.target.value)}
                />
                <Button
                  variant="contained"
                  sx={{
                    color: "#2C0B1F",
                    backgroundColor: "white",
                    marginLeft: "2vh",
                    height: "6vh",
                    fontSize: "4vh",
                    "&:hover": {
                      backgroundColor: "#2C0B1F",
                      color: "white",
                    },
                  }}
                  onClick={handleSubmit}
                >
                  {editFeature?.isEdit ? (
                    <BiEditAlt style={{ fontSize: "3vh" }} />
                  ) : (
                    "+"
                  )}
                </Button>
              </span>
            </h3>
          </Box>
          <Box className="box4">
            <FeatureBox projectFeature={projectFeature} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Features;
