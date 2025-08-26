import { Router } from "express";
import { createUser, LoginUser } from "../controllers/userController";
import verifyJWT from "../middleware/verifyjwt";
const router = Router();

//router create user
router.post("/create", createUser);
//router login user
router.post("/login", LoginUser);
router.get("/me", verifyJWT, (req, res) => {
  res.json({ success: true, message: "You are authenticated" });
});

export default router;
