import { protect } from "../controllers/AuthController";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  setBlogsUsersIds,
  updateBlog,
} from "../controllers/BlogController";
import { upload } from "../middleware/file";
import {} from "./SchemaValidations";

const express = require("express");

const router = express.Router({ mergeParams: true });

//router.use(protect);

router.route("/").post(upload.single("coverImg"), createBlog).get(getAllBlogs);

router.route("/:id").get(getBlog).patch(updateBlog).delete(deleteBlog);

module.exports = router;
