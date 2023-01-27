import { Request, Response } from "express";
import { connect } from "../database";
import { User } from "../interface/IUsers";

export async function getUsers(req:Request, res:Response): Promise<Response> {
    const conn = await connect();
    const users = await conn.query('SELECT * FROM usuarios');
    return res.json(users[0]);
}

export async function createUsers(req:Request, res:Response) {
    const newUser:User = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO usuarios SET ?', [newUser]);
    return res.json({
        message: 'Usuario creado'
    })
}

export async function getUserId(req:Request, res:Response): Promise<Response> {
    const id = req.params.userId;
    const conn = await connect();
    const users = await conn.query('SELECT * FROM usuarios WHERE id_usuarios = ?', [id]);
    return res.json(users[0])
}

export async function getUserEmail(req:Request, res:Response): Promise<Response> {
    const email:string = req.body.email;
    const conn = await connect();
    const users = await conn.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    return res.json(users[0])
}

export async function deleteUserId(req:Request, res:Response): Promise<Response> {
    const id = req.params.userId;
    const conn = await connect();
    await conn.query('DELETE FROM usuarios WHERE id_usuarios = ?', [id]);
    return res.json({
        message: 'Usuario eliminado'
    })
}

export async function updateUser(req:Request, res:Response) {
    const id = req.params.userId;
    const updateUser: User = req.body;
    const conn = await connect();
    await conn.query('UPDATE usuarios SET ? WHERE id_usuarios = ?', [updateUser, id]);
    return res.json({
        message: 'Usuario Actualizado'
    })
}