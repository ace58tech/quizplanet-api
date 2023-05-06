import mongoose from "mongoose";
import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// db connection
mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}`)
  .then(() => {
    console.log("DB connected")
    app.listen(port, () => console.log(`[server]: Started on port ${port}`));
  })
  .catch((err) => console.log(err));

app.get("/", (req: Request, res: Response) =>
  res.send("Express + TypeScript Server")
);