import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name:"dashboard",
    initialState:{
        isLogged:false,
        isProject:false,
        isFeature:false,
        isTodo:false
    },
    reducers:{
        projectPage:(state,action)=>{
            return{
                ...state,
                isProject:action.payload,
                isFeature:false,
                istodo:false
            }
        },
        featurePage:(state,action)=>{
            return{
                ...state,
                isProject:false,
                isFeature:action.payload,
                istodo:false
            }
        },
        todoPage:(state,action)=>{
            return{
                ...state,
                isProject:false,
                isFeature:false,
                isTodo:action.payload
            }

        },
        userLogged:(state,action) => {
            return{
                ...state,
                isLogged:action.payload
            }
        }

    }
})


export const {projectPage, featurePage, todoPage,userLogged} = dashboardSlice.actions
export default dashboardSlice.reducer
