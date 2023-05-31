import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "./GetPostsSlice";

interface PostDetailsState {
  post: Post;
  loading: boolean;
  error: string;
}

const initialState: PostDetailsState = {
  post: {
    title: "",
    description: "",
    coverImg: "",
    content: "",
    createdBy: "",
  },
  loading: false,
  error: "",
};

export const fetchPostDetails: any = createAsyncThunk(
  "type/fetchPostDetails",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/blogs/${id}`
      );
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const postDetailsSlice = createSlice({
  name: "PostDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPostDetails.pending]: (state) => {
      state.loading = true;
      console.log("pending");
    },

    [fetchPostDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.post = payload;
      console.log("success");
      console.log("fetchPostDetails", payload);
    },

    [fetchPostDetails.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
      console.log("rejected");
    },
  },
});

export const {} = postDetailsSlice.actions;

export default postDetailsSlice.reducer;
