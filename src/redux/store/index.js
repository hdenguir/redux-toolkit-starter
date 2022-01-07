import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import postsSlice from "../slices/postsSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice
  }
});

export default store;
