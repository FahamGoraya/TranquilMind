import { Router } from "express";
import { createUser } from "../controllers/userController";
const router = Router();

//router create user
router.get("/create", createUser);

export default router;
