import express from "express";
import healthRouter from "./routes/health";
import todosRouter from "./routes/todoRoutes";
import { logger } from "./middleware/logger";
import { authMiddleware } from "./middleware/auth";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

// Health route
app.use("/", healthRouter);

// Protected route
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Access granted to protected route" });
});

// Todo routes
app.use("/", todosRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
