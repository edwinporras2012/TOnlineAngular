import { connect } from "../database";
import { json, Request, Response } from "express";
import { Category } from "../interface/ICategory";

export async function getAllCategories(req:Request, res:Response):Promise<Response> {
    const conn = await connect();
    const categories = await conn.query('SELECT * FROM categorias');
    (await connect()).end;
    return res.json(categories[0]);
}

export async function createCategory(req:Request, res:Response) {
    const newCategory:Category = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO categorias SET ?', [newCategory]); 
    (await connect()).end;
    return res.json({
        message: 'categoria creada'
    })
}

export async function getAllProductsByCategory(req:Request, res:Response):Promise<Response> {
    const idCategory = req.params.idCategoria;
    const conn = await connect();
    const categories = await conn.query('SELECT p.id_producto, p.nombre AS nombre, c.nombre AS categoryIdNombre, p.categoryId, p.precio, p.existencia, p.descripcion, p.marca, p.img, p.disponibilidad, p.color, p.review FROM categorias c INNER JOIN productos p ON p.categoryId = c.id_categoria WHERE id_categoria = ?', [idCategory]);
    (await connect()).end;
    return res.json(categories[0]);
}

export async function getIdCategory(req:Request, res:Response):Promise<Response> {
    const idCategory = req.params.idCategoria;
    const conn = await connect();
    const categories = await conn.query('SELECT * FROM categorias WHERE id_categoria = ?', [idCategory]);
    (await connect()).end;
    return res.json(categories[0]);
}

export async function deleteIdCategory(req:Request, res: Response) {
    const idCategory = req.params.idCategoria;
    const conn = await connect();
    await conn.query('DELETE FROM categorias WHERE id_categoria = ?', [idCategory]);
    (await connect()).end;
    return res.json({
        message: 'categria eliminada'
    });
}

export async function updateCategory(req:Request, res:Response) {
    const idCategory = req.params.idProducto;
    const updateId:Category = req.body;
    const conn = await connect();
    await conn.query('UPDATE categorias SET ? WHERE id_categoria = ?', [updateId, idCategory]);
    (await connect()).end;
    return res.json({
        message: 'Categoria actualizada'
    })
}