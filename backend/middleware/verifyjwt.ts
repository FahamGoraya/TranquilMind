import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: number;
      email: string;
    };
  }
}

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    if (
      typeof decoded === "object" &&
      decoded !== null &&
      "id" in decoded &&
      "email" in decoded
    ) {
      req.user = {
        id: (decoded as any).id,
        email: (decoded as any).email,
      };
      next();
    } else {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
  } catch (err) {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
export default verifyJWT;
