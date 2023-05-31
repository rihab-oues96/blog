import { Date, InferSchemaType, model, now, ObjectId, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  description: string;
  coverImg?: string;
  content?: string;
  createdBy?: ObjectId;
  createdAt?: Date;
}

const BlogSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },

    description: {
      type: Schema.Types.String,
    },

    coverImg: {
      type: Schema.Types.String,
    },

    content: {
      type: Schema.Types.String,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    createdAt: {
      type: Schema.Types.Date,
      default: new Date().toISOString().slice(0, 10),
    },
  },
  {
    timestamps: true,
  }
);

type Blog = InferSchemaType<typeof BlogSchema>;

export default model<Blog>("Blog", BlogSchema, "blog");
