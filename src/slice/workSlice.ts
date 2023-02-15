import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: crypto.randomUUID(),
    title: "Your first work!",
    items: [{ id: crypto.randomUUID(), name: "Hello" }],
  },
  {
    id: crypto.randomUUID(),
    title: "Your second work!",
    items: [{ id: crypto.randomUUID(), name: "World" }],
  },
];

const worksSlice = createSlice({
  name: "works",
  initialState,
  reducers: {
    addNewWork: (state, action) => {
      state.push({
        id: crypto.randomUUID(),
        title: action.payload.title,
        items: [],
      });
    },
    editWorkTitle: (state, action) => {
      state.forEach((work) => {
        if (work.id === action.payload.workId) {
          work.title = action.payload.title;
        }
      });
    },
    removeWork: (state, action) => {
      const index = state.findIndex(
        (work) => work.id === action.payload.workId
      );
      state.splice(index, 1);
    },
    addNewItem: (state, action) => {
      state.forEach((work) => {
        if (work.id === action.payload.workId) {
          work.items.push({
            id: crypto.randomUUID(),
            name: action.payload.name,
          });
        }
      });
    },
    editItemName: (state, action) => {
      state.forEach((work) => {
        if (work.id === action.payload.workId) {
          work.items.forEach((item) => {
            if (item.id === action.payload.itemId) {
              item.name = action.payload.name;
            }
          });
        }
      });
    },
    removeItem: (state, action) => {
      state.forEach((work) => {
        if (work.id === action.payload.workId) {
          const index = work.items.findIndex(
            (item) => item.id === action.payload.itemId
          );
          work.items.splice(index, 1);
        }
      });
    },
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
