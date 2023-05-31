import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Post {
  title: string;
  description: string;
  coverImg?: any;
  content?: any;
  createdBy?: any;
}

interface PostState {
  post: Post;
  loading: boolean;
  error: string;
}

const initialState: PostState = {
  post: {
    title: "",
    description: "",
    coverImg: "",
    content: "",
  },
  loading: false,
  error: "",
};

export const createPost: any = createAsyncThunk(
  "type/postData",
  async (data: Post) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/blogs",
        data
      );

      return response.data;
    } catch (error: any) {
      console.error(error.response.data);
    }
  }
);

export const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {},
  extraReducers: {
    [createPost.pending]: (state) => {
      state.loading = true;
    },

    [createPost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.post = payload;
    },

    [createPost.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export const {} = postSlice.actions;

export default postSlice.reducer;
