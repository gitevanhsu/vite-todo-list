import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import worksReducer from "../slice/workSlice";

const store = configureStore({
  reducer: worksReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
