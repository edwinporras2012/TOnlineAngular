import { Document } from "mongoose";

export interface IPayload extends Document{
    _id: string;
    iat: number;
    exp: number;
}