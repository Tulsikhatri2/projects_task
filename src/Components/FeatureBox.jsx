import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteFeature } from "../Redux/ProjectsCRUD/dataSlice";
import { useNavigate } from "react-router-dom";

const FeatureBox = () => {
  const { featuresList } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (featuresList?.length === 0) {
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
          <h4>Add some features...</h4>
        </Box>
      </>
    );
  }

  console.log(featuresList, "featuresbox");

  function handleDeleteFeature(id) {
    dispatch(deleteFeature(id));
  }

  function handleTodos(f_id) {
    navigate(`/todos/${f_id}`);
  }

  return (
    <>
      {featuresList?.map((item) => {
        return (
          <>
            <Box
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
              <p style={{ marginLeft: "10px", marginTop: "2vh" }}>
                {item.title}
              </p>

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
              <p
                style={{
                  textAlign: "right",
                  lineHeight: "0px",
                  diaplay: "flex",
                  flexDirection: "row",
                  marginTop: "-2.5vh ",
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
