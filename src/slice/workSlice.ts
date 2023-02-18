import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { initialState, getWork } from "../utils/firebaseFuns";

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

    dndAction: (state, action) => {
      if (!action.payload.destination) return;
      state.isFirstRender = false;
      if (action.payload.type === "work" && action.payload.destination.droppableId === "trash") {
        state.works.splice(action.payload.source.index, 1);
        return;
      }
      if (action.payload.type === "work") {
        const fromIndex = action.payload.source.index;
        const toIndex = action.payload.destination.index;
        const dragItem = state.works.splice(fromIndex, 1)[0];
        state.works.splice(toIndex, 0, dragItem);
        return;
      }
      if (action.payload.type === "item") {
        const fromWorkIndex = state.works.findIndex(
          (item) => item.id === action.payload.source.droppableId
        );
        const toListIndex = state.works.findIndex(
          (item) => item.id === action.payload.destination.droppableId
        );
        const dragItem = state.works[fromWorkIndex].items.filter(
          (item) => item.id === action.payload.draggableId
        )[0];
        state.works[fromWorkIndex].items.splice(action.payload.source.index, 1);
        state.works[toListIndex].items.splice(
          action.payload.destination.index,
          0,
          dragItem
        );
      }
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
  addNewItem,
  editItemName,
  removeItem,
  dndAction,
} = worksSlice.actions;

export default worksSlice.reducer;
