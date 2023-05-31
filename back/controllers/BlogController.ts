import { NextFunction, Request, RequestHandler, Response } from "express";
import createHttpError from "http-errors";
import Blog from "../models/BlogModel";
import CatchAsync from "../utils/CatchAsync";

export const setBlogsUsersIds = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.blog) req.body.blog = req.params.blogId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

export const getAllBlogsByMe: RequestHandler = CatchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    const blogs = await Blog.find({ createdBy: req.user.id });

    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: { blogs },
    });
  }
);

export const getAllBlogs: RequestHandler = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const blogs = await Blog.find();

    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: blogs,
    });
  }
);

export const getBlog: RequestHandler = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return next(createHttpError(404, "no blog found with that id"));

    res.status(200).json({
      status: "success",
      data: blog,
    });
  }
);

export const createBlog: RequestHandler = CatchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    req.body.coverImg = `http://localhost:8080/${req.file.path}`;

    // req.body.createdBy = req.user.id;
    const newBlog = await Blog.create(req.body);

    res.status(201).json({
      status: "success",
      data: { newBlog },
    });
  }
);

export const updateBlog: RequestHandler = CatchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) return next(createHttpError(404, "no post found with that id"));

    const idString = blog.createdBy?.toString();
    const creator = idString?.substring(0, 24);

    if (creator !== req.user.id) {
      return next(
        createHttpError(401, "you are not allowed to modify this task")
      );
    }
    res.status(200).json({
      status: "success",
      data: {
        data: blog,
      },
    });
  }
);

export const deleteBlog: RequestHandler = CatchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    const blog: any = Blog.findById(req.params.id);

    if (!blog) return next(createHttpError(404, "no blog found with that id"));

    const idString = blog.createdBy?.toString();
    const creator = idString?.substring(0, 24);

    if (creator !== req.user.id) {
      return next(
        createHttpError(401, "you are not allowed to delete this blog")
      );
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  }
);
