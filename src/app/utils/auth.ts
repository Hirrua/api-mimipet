import jwt, { SignOptions } from "jsonwebtoken"
import { ITokenData } from "../inferfaces/login-interface"
import ErrorExtention from "./error"
import dotenv from "dotenv"

dotenv.config()

const secret = process.env.SECRET_KEY as string
const jwtDefaultConfig: SignOptions = {
  algorithm: "HS256",
  expiresIn: "5h"
}

class Auth {
  constructor(private jwtConfig?: SignOptions) {
    if (!jwtConfig) {
      this.jwtConfig = jwtDefaultConfig
    }
  }

  public jwtGenerator(payload: ITokenData) {
    return jwt.sign(payload, secret, this.jwtConfig)
  }

  public authenticateToken(token: string) {
    if (!token) {
      throw new ErrorExtention(404, "Token não encontrado!")
    }

    try {
      const validateJWT = jwt.verify(token, secret, this.jwtConfig)
      return validateJWT
    } catch (err) {
      throw new ErrorExtention(400, "Falha na autenticação")
    }
  }
}

export default Auth