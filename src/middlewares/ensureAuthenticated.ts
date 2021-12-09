import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userID } = verify(
      token,
      "a99e567044ffd6c21c060bf22abda82e"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(userID);

    if (!user) {
      throw new Error("User does not exist");
    }

    return next();
  } catch (error) {
    throw new Error("Invalid token");
  }
}
