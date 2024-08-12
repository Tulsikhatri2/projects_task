import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
    editTodo:{todo:{}, isEdit:false},
    todoCompleted:false
  },
  reducers: {
    createTodos: (state, action) => {
      console.log(action.payload,"todocreate")
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    },
    deleteTodos: (state, action) => {
      const deletedTodos = [...state.todoList];
      const list = deletedTodos.filter((item) => item.id !== action.payload);
      return {
        ...state,
        todoList: list,
      };
    },
    editingTodos:(state,action)=>{
      return{
        ...state,
        editTodo:{todo:action.payload, isEdit:true}
      }
    },
    updateTodos:(state,action) => {
      return{
        ...state,
        todoList:state.todoList.map((item)=>item.id == action.payload.id ? action.payload : item),
        editTodo:{todo:{}, isEdit:false}
      }
    },
    featureTodoDeleted:(state,action)=>{
      const deletingFeatureTodo = [...state.todoList]
      const todoDeleted = deletingFeatureTodo.filter((item)=> item.featureId !== action.payload)
      return{
        ...state,
        todoList: todoDeleted
      }
    },
    projectTodoDelete:(state,action)=>{
      const deletingProjectTodo = [...state.todoList]
      const todoListDelete = deletingProjectTodo.filter((item) => item.projectID !== action.payload)
      return{
        ...state,
        todoList:todoListDelete
      }
    },
    isTodoCompleted:(state,action)=>{
      return{
        ...state,
        todoCompleted:action.payload
      }
    }
  },
});

export const {isTodoCompleted,createTodos, deleteTodos, editingTodos, updateTodos, featureTodoDeleted,projectTodoDelete} = todoSlice.actions
export default todoSlice.reducer
