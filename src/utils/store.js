import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import searchReducer from "./searchSlice"
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    config: configReducer,
    search:  searchReducer,
    chat: chatSlice
  },
});

export default store;
