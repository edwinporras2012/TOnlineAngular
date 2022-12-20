import { Document } from "mongoose";

export interface IProductos extends Document{
    nombre: string;
    precio: number,
    existencia: number;
}