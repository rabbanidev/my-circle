import cors from "cors";
import express, { Application } from "express";
import cookieParser from "cookie-parser";
import {
  globalErrorHandler,
  notFoundHandler,
} from "@/middlewares/error.middleware";
import apiRoutes from "@/routes";

const app: Application = express();

app.use(
  cors({
    origin: ["*"],
    credentials: true,
  }),
);
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TODO: Root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome server!" });
});

// TODO: API routes
app.use("/api", apiRoutes);

// TODO: Errors middlewares
app.use(globalErrorHandler);

// TODO: Not found route handler
app.use(notFoundHandler);

export default app;
