import React from "react";
import "./BlogCard.scss";
import right_arrow from "../../../../assets/icons/right-arrow.png";
import { Link } from "react-router-dom";

const BlogCard = ({ post }: any) => {
  return (
    <div className="blog-card">
      <div className="image">
        <img src={post.coverImg} alt=" " />
      </div>

      <p className="created-at">{post.createdAt}</p>

      <Link to={`/blog/${post._id}`}>
        <p className="blog-title">{post.title}</p>
      </Link>

      <p className="short-description">{post.description}</p>
      <Link to={`/blog/${post._id}`}>
        <div className="read-more">
          <p>Read More</p>
          <img src={right_arrow} alt="right arrow" />
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
