import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { deleteTodos } from "../Redux/ProjectsCRUD/dataSlice";
import { useParams } from "react-router-dom";

const TodosList = () => {
  const { todosList } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { f_id } = useParams();
  console.log(todosList, "data Todos");

  console.log(f_id, "from todo feature");

  if (todosList?.length === 0) {
    return (
      <>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            marginTop:"10vh"
          }}
        >
          <h4>Add some todos...</h4>
        </Box>
      </>
    );
  }

  function handleDeleteTodo(id) {
    dispatch(deleteTodos(id));
  }

  return (
    <>
      {todosList?.map((item) => {
        return (
          <Box
            sx={{
              width: "70%",
              height: "15%",
              backgroundColor: "white",
              borderRadius: "1rem",
              boxShadow: "inset 0px 0px 10px #000",
              paddingLeft: "2vh",
              paddingRight: "2vh",
              marginTop: "2vh",
            }}
          >
            <p style={{ marginTop: "2.5vh", display: "flex" }}>
              <span style={{ width: "55%" }}>{item.title}</span>
              <span
                style={{
                  width: "45%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "right",
                  fontSize: "4vh",
                }}
              >
                <span style={{ color: "#216E45" }}>
                  <BiEditAlt />
                </span>
                <span
                  style={{ color: "#782B2B", marginLeft: "2vh" }}
                  onClick={() => {
                    handleDeleteTodo(item.id);
                  }}
                >
                  <RiDeleteBin6Line />{" "}
                </span>
                <span style={{ color: "#9B6486", marginLeft: "2vh" }}>
                  <IoMdCheckmarkCircleOutline />{" "}
                </span>
              </span>
            </p>
          </Box>
        );
      })}
    </>
  );
};

export default TodosList;
