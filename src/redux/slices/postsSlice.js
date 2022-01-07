import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { posts: [] };

export const getPosts = createAsyncThunk(
  "posts/list",
  async (payload, { rejectWidthValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    }
  }
});

export default postsSlice.reducer;
