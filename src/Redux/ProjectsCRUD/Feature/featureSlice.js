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
    editFeature:(state,action)=>{
        return{
            ...state,
            editFeature:{feature:action.payload , isEdit: true}
        }
    }
  },
});

export const { createFeature, deleteFeature,editFeature } = featureSlice.actions;
export default featureSlice.reducer;
