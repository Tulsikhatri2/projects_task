import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { deleteTodos } from "../Redux/ProjectsCRUD/Todo/todoSlice";
import { useParams } from "react-router-dom";

const TodosList = ({ featureTodo }) => {
  const { todoList } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { f_id } = useParams();
  console.log(todoList, "data Todos");

  console.log(f_id, "from todo feature");

  if (featureTodo?.length === 0) {
    return (
      <>
        <Box className="blankScreen">
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
      {featureTodo?.map((item) => {
        return (
          <Box className="todoListBox">
            <p style={{ marginTop: "2.3vh", display: "flex" }}>
              <span style={{ width: "55%" }}>{item.title}</span>

              <span className="todoListSpan1">
                <span style={{ color: "#216E45", fontSize:"3.2vh" }}>
                  <BiEditAlt />
                </span>

                <span
                  style={{ color: "#782B2B", marginLeft: "2vh", fontSize:"3.2vh" }}
                  onClick={() => {
                    handleDeleteTodo(item.id);
                  }}
                >
                  <RiDeleteBin6Line />
                </span>

                <span style={{ color: "#9B6486", marginLeft: "2vh" , fontSize:"3.2vh"}}>
                  <IoMdCheckmarkCircleOutline />
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
