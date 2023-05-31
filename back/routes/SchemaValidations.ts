import Joi from "joi";
import { IBlog } from "../models/BlogModel";
import { IUser } from "../models/UserModel";

export const validateLoginData = (login: {
  email: string;
  password: string;
}) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(36).required(),
  });
  return loginSchema.validate(login);
};

export const validateUserData = (user: IUser) => {
  const userSchema = Joi.object<IUser>({
    firstName: Joi.string().required().min(3).max(20),
    lasttName: Joi.string().required().min(3).max(20),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(36).required(),
    active: Joi.boolean(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
  });
  return userSchema.validate(user);
};

export const validateTaskData = (task: IBlog) => {
  const taskSchema = Joi.object<IBlog>({
    title: Joi.string().required().max(60),
    description: Joi.string().required(),
    createdBy: Joi.string()
      .required()
      .regex(/^[0-9a-fA-F]{24}$/, "object Id"),
  });

  return taskSchema.validate(task);
};

// export const validateCommentData = (comment: IComment) => {
//   const commentSchema = Joi.object<IComment>({
//     comment: Joi.string().required(),
//     createdAt: Joi.date().required(),
//     task: Joi.string()
//       .required()
//       .regex(/^[0-9a-fA-F]{24}$/, "object Id"),
//     createdBy: Joi.string()
//       .required()
//       .regex(/^[0-9a-fA-F]{24}$/, "object Id"),
//   });

//   return commentSchema.validate(comment);
// };
