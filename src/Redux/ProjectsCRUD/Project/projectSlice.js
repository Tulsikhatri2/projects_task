import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projectList: [],
    editProject : {project:{}, isEdit:false}
  },
  reducers: {
    createProject: (state, action) => {
      return {
        ...state,
        projectList: [...state.projectList, action.payload],
      };
    },
    deleteProject: (state, action) => {
      const deletedProject = [...state.projectList];
      const list = deletedProject.filter(
        (items) => items.id !== action.payload
      );
      return {
        ...state,
        projectList: list,
      };
    },
    editProject:(state,action)=>{
        return{
            ...state,
            editProject:{project:action.payload, isEdit:true}
        }
    },
    updateProject:(state,action)=>{
        return{
            ...state,
            projectList: state.projectList.map((item)=> item.id == action.payload.id ? action.payload : item),
            editProject:{project:{}, isEdit:false}
        }
    }
  },
});


export const {createProject, deleteProject,editProject, updateProject} = projectSlice.actions
export default projectSlice.reducer
