import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Post {
  title: string;
  description: string;
  coverImg?: string;
  content?: string;
  createdBy?: string;
}

interface PostListState {
  postList: Post[];
  loading: boolean;
  error: string;
}

const initialState: PostListState = {
  postList: [],
  loading: false,
  error: "",
};

export const fetchPosts: any = createAsyncThunk("type/fetchPosts", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/blogs");
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const postListSlice = createSlice({
  name: "PostList",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = true;
    },

    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.postList = payload;
    },

    [fetchPosts.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export const {} = postListSlice.actions;

export default postListSlice.reducer;
