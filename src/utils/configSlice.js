import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : "config",
    initialState:{
        isSidebarOpen: true,
       
    },
    reducers:{
        toggleSidebar: (state) =>{
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        removeMenu: (state) =>{
            state.isSidebarOpen = false;
        },
       
    }
})

export const {toggleSidebar, removeMenu} = configSlice.actions

export default configSlice.reducer;