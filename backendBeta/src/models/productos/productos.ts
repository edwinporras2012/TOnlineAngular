import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { IProductos } from "./IProductos";


const productSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        min: 4,
        lowercase: true
    },
    precio:{
        type: Number,
        unique: true,
        required: true,
    },
    existencia:{
        type: Number,
        required: true,
    }
});

export default model<IProductos>('Products', productSchema);
