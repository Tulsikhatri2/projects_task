import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createFeature } from "../Redux/ProjectsCRUD/dataSlice";
import FeatureBox from "./FeatureBox";
import { MdEdit } from "react-icons/md";
import { useParams } from "react-router-dom";

const Features = () => {
  const { featuresList } = useSelector((state) => state.data);
  console.log(featuresList, "S");
  const { p_id } = useParams();
  console.log(p_id, "project id");
  const [featureTitle, setFeatureTitle] = useState("");

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(
      createFeature({
        id: crypto.randomUUID(),
        title: featureTitle,
        projectID: p_id,
      })
    );
    setFeatureTitle("");
  }

  useEffect(() => {}, [handleSubmit]);

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#2C0B1F",
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
              backgroundColor: "#BCC1BA",
              borderRadius: "1rem",
            }}
          >
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "4vh",
                color: "#092523",
              }}
            >
              <span style={{ width: "50%", height: "50%", paddingLeft: "5vw" }}>
                <u>Features</u>
              </span>
              <span
                style={{
                  width: "50%",
                  height: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "-5vw",
                }}
              >
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
            }}
          >
            <FeatureBox />
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
              label="Update Features"
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
              // value={projectTitle}
              // onChange={(e) => setProjectTitle(e.target.value)}
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
              <MdEdit />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Features;
