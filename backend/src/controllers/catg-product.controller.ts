import { connect } from "../database";
import { json, Request, Response } from "express";
import { Category } from "../interface/ICategory";

//category
export async function getAllProductsByCategory(req:Request, res:Response):Promise<Response> {
    const idCategory = req.params.idCategoria;
    const conn = await connect();
    const categories = await conn.query('SELECT p.id_producto, p.nombre AS nombre, c.nombre AS categoryIdNombre, p.categoryId, p.precio, p.existencia, p.descripcion, p.marca, p.img, p.disponibilidad, p.color, p.review FROM categorias c INNER JOIN productos p ON p.categoryId = c.id_categoria WHERE id_categoria = ?', [idCategory]);
    (await connect()).end;
    return res.json(categories[0]);
}

//products
export async function getAllProductsByIdProduct(req:Request, res:Response):Promise<Response> {
    const idProduct = req.params.idProduct;
    const conn = await connect();
    const products = await conn.query('SELECT p.id_producto, p.nombre AS nombre, c.nombre AS categoryIdNombre, p.categoryId, p.precio, p.existencia, p.descripcion, p.marca, p.img, p.disponibilidad, p.color, p.review FROM categorias c INNER JOIN productos p ON p.categoryId = c.id_categoria WHERE p.id_producto = ?', [idProduct]);
    (await connect()).end;
    return res.json(products[0]);
}

export async function getAllProductsByCategorySelect(req:Request, res:Response):Promise<Response> {
    const conn = await connect();
    const categories = await conn.query('SELECT p.id_producto, p.nombre AS nombre, c.nombre AS categoryIdNombre, p.categoryId, p.precio, p.existencia, p.descripcion, p.marca, p.img, p.disponibilidad, p.color, p.review FROM productos p INNER JOIN categorias c ON c.id_categoria = p.categoryId GROUP BY p.categoryId');
    (await connect()).end;
    return res.json(categories[0]);
}