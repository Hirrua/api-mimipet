import { Request, Response, NextFunction } from "express";
import Auth from "../utils/auth";
import ErrorExtention from "../utils/error";

const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new ErrorExtention(404, "Token não informado")
  }
  console.log("Authorization Header:", authHeader); // Log do header de autorização

  const token = authHeader.replace(/^Bearer\s+/, "");
  console.log("Token after Bearer removal:", token); // Log do token após a remoção do 'Bearer '

  try {
    const tokenGenerate = new Auth();
    tokenGenerate.authenticateToken(token);
    next();
  } catch (error) {
    console.log("Authentication Error:", error); // Log de erros de autenticação
    res.status(401).json({ message: "Falha na autenticação: " + error });
  }
};

export default authenticationMiddleware;
