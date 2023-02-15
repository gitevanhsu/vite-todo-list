import { configureStore } from "@reduxjs/toolkit";
import worksReducer from "../slice/workSlice";

const store = configureStore({
  reducer: worksReducer,
});

export default store;
