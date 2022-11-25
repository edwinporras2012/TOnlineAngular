import { Request, Response } from "express";
import User from "../models/user";
import { IUser } from "../models/Iuser";

import jwt from "jsonwebtoken";

//Registrar un usuario
export const signup = async (req: Request, res: Response)=>{
        // console.log(req.body);

    //Guardando un nuevo usuario
    const user:IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.password = await user.encryptPassword(user.password);
        // console.log(user);
    const saveUser = await user.save();
        // console.log(saveUser);

    //Creando token
    // const token:string = jwt.sign({ _id: saveUser._id}, process.env.TOKEN_SECRET || 'TokenTest1254'); //49 minutos
    const token:string = jwt.sign({ _id: saveUser._id}, `${process.env.TOKEN_SECRET}`); 
    // res.json(token); //TRAE EL TOKEN UNICAMENTE
    res.header('auth-token', token).json(saveUser); // TRAE EL TOKEN PERO LO GUARDA EN LOS HEADERS
}

// Hacer un login
export const signin = async(req: Request, res: Response)=>{
    const user =  await User.findOne({email: req.body.email});

    if (!user) {
        return res.status(400).json('Email o password no encontrados')
    }

    const correctPassword:boolean = await user.validatePassword(req.body.password);
    // res.send('signin');

    if (!correctPassword) {
        return res.status(400).json('Password incorrecto')
    }

    // const token:string = jwt.sign({_id: user._id},process.env.TOKEN_SECRET || 'TokenTest1254',{
    const token:string = jwt.sign({_id: user._id}, `${process.env.TOKEN_SECRET}`,{
        expiresIn: 60 * 60 * 24
    });
    res.header('auth-token', token).json(user);

}

// Indicarle los datos de ese perfil
export const profile = async (req: Request, res: Response)=>{

    // console.log(req.header('auth-token')); //Revisar 1h 04 min
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(404).json('Usuario no encontrado');
        res.json(user)
    }

}