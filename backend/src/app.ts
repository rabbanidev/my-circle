import cors from "cors";
import express, { Application } from "express";
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(
  cors({
    origin: [],
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

export default app;
