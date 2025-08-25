import type { Request, Response } from "express";
import { db } from "../db/db";
import { users } from "../db/schema";

const createUser = async (req: Request, res: Response) => {
  const { email, name, age } = req.body;

  try {
    await db.insert(users).values({
      email,
      name,
      age,
    });
    res.status(201).json({ success: true, message: "User created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { createUser };
