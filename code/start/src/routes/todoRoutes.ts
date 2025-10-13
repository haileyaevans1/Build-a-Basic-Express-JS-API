import { Router, Request, Response } from "express";
import { Todo } from "../types/todo";

const router = Router();
let todos: Todo[] = [];
let nextId = 1;

// Get all todos
router.get("/api/todos", (req: Request, res: Response) => {
  res.json(todos);
});

// Add a new todo
router.post("/api/todos", (req: Request, res: Response) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }

  const newTodo: Todo = { id: nextId++, task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

export default router;
