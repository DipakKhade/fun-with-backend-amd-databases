import express from "express";
import cors from "cors";
import { createTodoValidator } from "./types/index.js";
import { Todo } from "./models/todo.js";
import connectToMongo from "./models/todo.js";

const app = express();
app.use(cors());
app.use(express.json());

//get all todos
app.get("/todos", async function (req, res) {
  connectToMongo();
  const allTodos = await Todo.find({});
  res.json(allTodos);
});

//add todo
app.get("/settodo", async function (req, res) {
  const userBody = req.body;
  const title = req.body.title;
  const description = req.body.description;
  const isCompleted = req.body.isCompleted;

  const validate = createTodoValidator.safeParse(userBody);
  console.log(validate);
  if (!validate.success) {
    return res.json("enter valid todo");
  } else {
    connectToMongo();
    const newtodo = await Todo.create({ title, description, isCompleted });
    if (!newtodo.success) {
      return res.json({ message: "not added to db" });
    } else {
      return res.json({ message: "added todo to database" });
    }
  }
});

//completed todos
app.get("/completed", async function (req, res) {
  const userCompletedBody = req.body;
  console.log(userCompletedBody);
  try {
    connectToMongo();
    const completedTodos = await Todo.find({
      isCompleted: true,
    });
    console.log(completedTodos);
  } catch (error) {
    console.log(error);
  }
});

//update todo
app.post("/update", async function (req, res) {
  connectToMongo();
  await Todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      isCompleted: true,
    },
  );

  res.json({
    message: "todo is updated",
  });
});

app.listen(3001, () => console.log("backend is listing at port 3001"));

// "title":"todo3",
//     "description":"this kjnjk is a desc",
//     "isCompleted":0
