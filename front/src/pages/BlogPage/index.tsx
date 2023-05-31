import React from "react";
import "./Blog.scss";

import office from "../../assets/images/office.webp";
import BlogsContainer from "./components/BlogsContainer";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-page">
      <p className="big-title">
        A UX Case Study on Creating a <br />
        Studious Environment for Students
      </p>

      <p className="date-author-name">
        Andrew Jonson <span>Posted on 27th January 2021</span>
      </p>

      <div className="office">
        <img src={office} alt="office" />
      </div>

      <p className="blog-page-description">
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black, and the stars had ceased to twinkle. By the same
        illusion which lifts the horizon of the sea to the level of the
        spectator on a hillside.
      </p>

      {/* <p className="read-more">Read more</p> */}
      <Link to="/create-new-post">
        <p className="read-more">Create new post</p>
      </Link>

      <BlogsContainer />
    </div>
  );
};

export default Blog;
