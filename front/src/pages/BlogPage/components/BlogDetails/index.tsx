import React, { useEffect } from "react";
import "../../Blog.scss";

import office from "../../../../assets/images/office.webp";
import { useParams } from "react-router";
import { fetchPostDetails } from "../../../../data/slices/GetPostDetailsSlice";
import { useSelector } from "react-redux";

const BlogDetails = () => {
  const { id } = useParams();
  const { post } = useSelector((state: any) => state.PostDetails);
  console.log(post);

  useEffect(() => {
    fetchPostDetails(id);
  }, []);

  return (
    <div className="blog-details">
      <p className="big-title">{post.title}</p>

      <p className="date-author-name">
        Andrew Jonson <span>Posted on 27th January 2021</span>
      </p>

      <div className="office">
        <img src={office} alt="office" />
      </div>
    </div>
  );
};

export default BlogDetails;
