import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTodos, updateTodos } from "../../Redux/ProjectsCRUD/Todo/todoSlice";
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

  const featureTodo = todoList?.filter((item)=>item?.featureId == fID)
console.log(pID,"todosProject")
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
      <Box className="contentHeadder">
              <p>Todos</p>
              <Box className="projectsAdd">
                <TextField
                  label="Add Todo"
                  value={todosTitle}
                  onChange={(e) => setTodosTitle(e.target.value)}
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
                <Box className="addButton" onClick={handleTodosSubmit}>
                  {editTodo.isEdit ? (
                    <BiEditAlt style={{ fontSize: "3vh" }} />
                  ) : (
                    "+"
                  )}
                </Box>
              </Box>
            </Box>
            <Box className="projectsDisplay">
             <TodosList featureTodo={featureTodo}/> 
            </Box>
    </>
  );
};

export default Todos;
