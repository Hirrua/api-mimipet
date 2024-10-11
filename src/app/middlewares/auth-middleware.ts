import { Request, Response, NextFunction } from "express";
import Auth from "../utils/auth";

const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization || ""
  const tokenGenerate = new Auth()
  tokenGenerate.authenticateToken(token)
  next()
}

export default authenticationMiddleware