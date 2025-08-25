import type { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
  res.json({ message: "User created" });
};

export { createUser };
