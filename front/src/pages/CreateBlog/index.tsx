import React from "react";
import "./CreateBlog.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Field, useFormik } from "formik";
import { useDispatch } from "react-redux";

import { Post, createPost } from "../../data/slices/CreatePostSlice";
import { useNavigate } from "react-router";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      coverImg: "",
      content: "",
    },

    onSubmit: async (values: Post) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("coverImg", values.coverImg);
      formData.append("content", values.content);
      dispatch(createPost(formData));
      navigate("/blog");
    },
  });

  return (
    <div className="create-blog">
      <p className="create-blog-title">Create New Post</p>

      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        <input
          type="file"
          id="myFileInput"
          name="coverImg"
          onChange={(event) => {
            formik.setFieldValue("coverImg", event.target.files![0]);
          }}
        />

        <label htmlFor="myFileInput" className="custom-file-upload">
          Choose a file
        </label>

        {/* <ReactQuill
          className="quill"
          modules={modules}
          formats={formats}
          onChange={formik.handleChange}
          id="content"
          value={formik.values.content}
        /> */}

        <textarea
          className="quill"
          // modules={modules}
          // formats={formats}
          onChange={formik.handleChange}
          id="content"
          value={formik.values.content}
        />

        <button type="submit" className="btn-create">
          <p>Create post</p>
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
