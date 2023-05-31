import React, { useEffect } from "react";
import BlogCard from "../BlogCard";
import "./BlogsContainer.scss";
import { fetchPosts, Post } from "../../../../data/slices/GetPostsSlice";
import { useDispatch, useSelector } from "react-redux";

const BlogsContainer = () => {
  const dispatch = useDispatch();
  const { postList } = useSelector((state: any) => state.PostList);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="blogs-container">
      <p className="blogs-container-title">Our Blog</p>

      <div className="container">
        {postList?.map((post: Post, index: number) => (
          <BlogCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogsContainer;
