import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState, getWork, syncWork } from "../utils/firebaseFuns";

export const fetchWorkList = createAsyncThunk("getWorks", getWork);

const worksSlice = createSlice({
  name: "works",
  initialState,
  reducers: {
    addNewWork: (state, action) => {
      state.works.push({
        id: crypto.randomUUID(),
        title: action.payload.title,
        items: [],
      });
      state.isFirstRender = false;
    },

    editWorkTitle: (state, action) => {
      state.works.forEach((work) => {
        if (work.id === action.payload.workId) {
          work.title = action.payload.title;
        }
      });
      state.isFirstRender = false;
    },

    removeWork: (state, action) => {
      const index = state.works.findIndex(
        (work) => work.id === action.payload.workId
      );
      state.works.splice(index, 1);
      state.isFirstRender = false;
    },

    addNewItem: (state, action) => {
      state.works.forEach((work) => {
        if (work.id === action.payload.workId) {
          work.items.push({
            id: crypto.randomUUID(),
            name: action.payload.name,
          });
        }
      });
      state.isFirstRender = false;
    },

    editItemName: (state, action) => {
      state.works.forEach((work) => {
        if (work.id === action.payload.workId) {
          work.items.forEach((item) => {
            if (item.id === action.payload.itemId) {
              item.name = action.payload.name;
            }
          });
        }
        state.isFirstRender = false;
      });
    },

    removeItem: (state, action) => {
      state.works.forEach((work) => {
        if (work.id === action.payload.workId) {
          const index = work.items.findIndex(
            (item) => item.id === action.payload.itemId
          );
          work.items.splice(index, 1);
        }
      });
      state.isFirstRender = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWorkList.fulfilled, (state, action) => {
      state.works = action.payload;
    });
  },
});

export const {
  addNewWork,
  editWorkTitle,
  removeWork,
  addNewItem,
  editItemName,
  removeItem,
} = worksSlice.actions;
export default worksSlice.reducer;
