import { Request, Response, NextFunction } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === "secret_token_123") {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized. Invalid or missing token." });
  }
};
