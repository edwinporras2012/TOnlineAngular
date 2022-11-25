import { Request, Response, NextFunction, request } from "express";
import jwt from "jsonwebtoken";
import { IPayload } from "./IveriryToken";

export const TokenValidation = (req: Request, res: Response, next: NextFunction)=>{

    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json('Acceso denegado');
    }

    const payload = jwt.verify(token, `${process.env.TOKEN_SECRET}`) as IPayload;
    // console.log(payload);
    req.userId = payload._id;

    next()
}