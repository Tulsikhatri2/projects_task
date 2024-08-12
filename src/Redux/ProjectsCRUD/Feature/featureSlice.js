import { createSlice } from "@reduxjs/toolkit";

const featureSlice = createSlice({
  name: "features",
  initialState: {
    featureList: [],
    editFeature: { feature: {}, isEdit: false },
  },
  reducers: {
    createFeature: (state, action) => {
      return {
        ...state,
        featureList: [...state.featureList, action.payload],
      };
    },
    deleteFeature: (state, action) => {
      const deletedFeatures = [...state.featureList];
      const list = deletedFeatures.filter(
        (items) => items.id !== action.payload
      );
      return {
        ...state,
        featureList: list,
      };
    },
    editingFeature: (state, action) => {
      return {
        ...state,
        editFeature: { feature: action.payload, isEdit: true },
      };
    },
    updateFeature: (state, action) => {
      console.log(action.payload, "tulsi")
      return {
        ...state,
        featureList: state.featureList.map((item)=> item.id == action.payload.id ? action.payload : item),
        editFeature:{feature:{}, isEdit:false}
      };
    },
    projectFeatureDelete:(state,action)=>{
      const deletingFeature = [...state.featureList]
      const featuresDeleted = deletingFeature.filter((item)=>item.projectID !== action.payload)
      return{
        ...state,
        featureList: featuresDeleted
      }
    },
  },
});

export const { createFeature, deleteFeature, editingFeature,updateFeature,projectFeatureDelete ,  featureCountUpdate} =
  featureSlice.actions;
export default featureSlice.reducer;
