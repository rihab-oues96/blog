import express from "express";
import cors from "cors";
const BlogRoutes = require("./routes/BlogRoutes");
const UserRouter = require("./routes/UserRoutes");

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/images", express.static("images"));

app.use("/api/v1/users", UserRouter);
app.use("/api/v1/blogs", BlogRoutes);

export default app;
