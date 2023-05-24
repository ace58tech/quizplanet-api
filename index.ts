import mongoose from "mongoose";
import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
const QuestionModel = require("./src/models/Question")

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

const main = () => {

  // Testing the document creation
  QuestionModel.create({question: "What is 4 + 5", correctOption: "9", options: ["4", "9", "7", "2"]});
  console.log("Hi")
}

main()