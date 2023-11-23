import "dotenv/config";
import express from "express";
import todosRouter from "./routers/todosRouter";
import dbConnect from "./startup/dbConnect";
import cors from "cors";

dbConnect();

const app = express();

app.use(cors());

app.use(express.json()); //parsing application/json

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/todos", todosRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
