import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { deleteTodos, editingTodos } from "../Redux/ProjectsCRUD/Todo/todoSlice";
import { toast, Zoom } from "react-toastify";



const TodosList = ({ featureTodo }) => {
  // let isCompleted = false
  // const { isCompleted } = useSelector((state) => state.todos);
  const [completedTodo,setCompletedTodo] = useState([])
  const [findingTodo, setFindingTodo] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const dispatch = useDispatch();


  if (featureTodo?.length === 0) {
    return (
      <>
        <Box className="blankScreen">
          <h4>Add some todos...</h4>
        </Box>
      </>
    );
  }

  const handleDeleteTodo = (id) => {
    // if(isCompleted){
    //   toast.error('Todo already completed!', {
    //     position: "top-center",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Zoom,
    //     });
    // }
    // else{
      dispatch(deleteTodos(id));
    // }
  }

  const handleEditTodo = (todo) => {
    // if(isCompleted){
    //   toast.error('Todo already completed!', {
    //     position: "top-center",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Zoom,
    //     });
    // }
    // else{
      dispatch(editingTodos(todo))
    // }
  }
  console.log(completedTodo,"1234")
  console.log(findingTodo,"id of todo")
  
  const handleCompletedTodo = (id) => {
    const completedID = id
    setCompletedTodo([...completedTodo,completedID])
    setFindingTodo(completedTodo.find((id) => id == completedID))
  
    // setIsCompleted(true)
  }
  console.log(isCompleted,"boolean")
  
  return (
    <>
      {featureTodo?.map((item) => {
        return (
          <Box className="todoListBox" key={item.id}>
            <p style={{ marginTop: "2.3vh", display: "flex" }}>
              <span className={`${findingTodo == item.id ?"todoCompleted":'todoTitle'}`}>
                {item.title}</span>

              <span className="todoListSpan1">
                <span className={`${findingTodo == item.id?"editTodoButton disabledButton":"editTodoButton"}`}>
                  <BiEditAlt onClick={()=>handleEditTodo(item)}/>
                </span>

                <span
                  className={`${findingTodo == item.id?"deleteTodoButton disabledButton":"deleteTodoButton"}`}
                  onClick={() => {
                    handleDeleteTodo(item.id);
                  }}
                >
                  <RiDeleteBin6Line />
                </span>

                <span className={`${findingTodo == item.id ?"completedTodoButton disabledButton":"completedTodoButton"}`}
                >
                  <IoMdCheckmarkCircleOutline 
                  onClick={()=>handleCompletedTodo(item.id)}
                  />
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
