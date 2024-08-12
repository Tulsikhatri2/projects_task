import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTodos, updateTodos } from "../Redux/ProjectsCRUD/Todo/todoSlice";
import TodosList from "./TodosList";
import { useParams } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
import { BiEditAlt } from "react-icons/bi";

const Todos = () => {
  const [todosTitle, setTodosTitle] = useState("");
  const dispatch = useDispatch();
  const { fID } = useParams();
  const {pID} = useParams()
  const { todoList, editTodo } = useSelector((state) => state.todos);

  // const todoData = todoList
  const featureTodo = todoList?.filter((item)=>item?.featureId == fID)


  useEffect(()=>{
    setTodosTitle(editTodo?.todo.title)
  },[editTodo])


  function handleTodosSubmit() {
    if(!todosTitle){
      toast.error('Add some name for your todo!', {
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
    else{
      if(!editTodo?.isEdit){
        dispatch(
          createTodos({
            id: crypto.randomUUID(),
            title: todosTitle,
            featureId: fID,
            projectID : pID
          })
        );
        toast.info('Todo added sucessfully!', {
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
      else{
        dispatch(updateTodos({
          id:editTodo.todo.id,
          title:todosTitle,
          featureId:editTodo.todo.featureId,
          projectID: editTodo.todo.projectID
        }))
        toast.info('Todo updated sucessfully!', {
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
    
    setTodosTitle("");
  }
  }

  return (
    <>
      <Box className="boxTodo1">
        <Box className="box2">
          <Box className="box3">
            <h3 className="headings">
              <span className="headingSpan1">
                <u>Todos</u>
              </span>
              <span className="headingSpan2">
                <TextField
                  label="Add Todos"
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
                  value={todosTitle}
                  onChange={(e) => setTodosTitle(e.target.value)}
                />
                <Button
                  variant="contained"
                  sx={{
                    color: "#091916",
                    backgroundColor: "white",
                    marginLeft: "2vh",
                    height: "6vh",
                    fontSize: "4vh",
                    "&:hover": {
                      backgroundColor: "#091916",
                      color: "white",
                    },
                  }}
                  onClick={handleTodosSubmit}
                >
                 {editTodo?.isEdit ? (
                    <BiEditAlt style={{ fontSize: "3vh" }} />
                  ) : (
                    "+"
                  )}
                </Button>
              </span>
            </h3>
          </Box>
          <Box className="boxTodo4">
            <TodosList featureTodo={featureTodo}/>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Todos;
