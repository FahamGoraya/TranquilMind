import type { Request, Response } from "express";
import { db } from "../db/db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createUser = async (req: Request, res: Response) => {
  const { email, firstName, password } = req.body;

  if (!email || !firstName || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing key information fields" });
  }

  try {
    await db.insert(users).values({
      email,
      name: firstName,
      password,
    });
    res
      .status(201)
      .json({ success: true, message: "Your account has been created" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error: User Email Already Exists" });
  }
};

const LoginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing email or password" });
  }
  try {
    const user = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    if (!user || user.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    if (user[0]?.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    // Generate JWT token
    const token = jwt.sign(
      { email: user[0]?.email, id: user[0]?.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    });

    return res.json({ success: true, message: "Login successful" });
  } catch (err) {
    console.error("Error fetching user:", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const getMe = async (req: Request, res: Response) => {};

export { createUser, LoginUser, getMe };
