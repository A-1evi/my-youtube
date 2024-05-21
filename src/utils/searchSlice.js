import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    suggestedVideos: null,
    keyword: null,
   
  },
  reducers: {
    cacheResults: (state, action) => {
        //  if we do state = {...action.payload , ...state} it is mutating the the state directly, we dont that want that here; here we want to update
        //  the state with action.payload but also keeping the previous state intact so either we 
        //  use Object.assign( that use the property of immer and update the state) or we can do it with out immer just by return it
      return { ...action.payload, ...state };
    },
    addSuggestedVideo:(state, action) =>{
      state.suggestedVideos =action.payload;
    },
    addSuggestedKeyword:(state,action) =>{
      state.keyword = action.payload
    }

    
   
  },
});

export const { cacheResults ,addSuggestedVideo ,addSuggestedKeyword } = searchSlice.actions;

export default searchSlice.reducer;
