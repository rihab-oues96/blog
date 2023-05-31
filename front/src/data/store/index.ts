import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../slices/CreatePostSlice";
import PostListReducer from "../slices/GetPostsSlice";
import PostDetailsReducer from "../slices/GetPostDetailsSlice";

export const store = configureStore({
  reducer: {
    CreatePost: PostReducer,
    PostList: PostListReducer,
    PostDetails: PostDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
