import { connect } from "../database";
import { json, Request, Response } from "express";
import { Product } from "../interface/IProducts";

export async function getAllProducts(req:Request, res:Response):Promise<Response> {
    const conn = await connect();
    const products = await conn.query('SELECT p.id_producto, p.nombre AS nombre, c.nombre AS categoryIdNombre, p.categoryId, p.precio, p.existencia, p.descripcion, p.marca, p.img, p.disponibilidad, p.color, p.review FROM productos p INNER JOIN categorias c ON c.id_categoria = p.categoryId');
    (await connect()).end;
    return res.json(products[0]);
}

// export async function getAllProductsByIdProduct(req:Request, res:Response):Promise<Response> {
//     const idProduct = req.params.idProduct;
//     const conn = await connect();
//     const products = await conn.query('SELECT p.id_producto, p.nombre AS nombre, c.nombre AS categoryIdNombre, p.categoryId, p.precio, p.existencia, p.descripcion, p.marca, p.img, p.disponibilidad, p.color, p.review FROM categorias c INNER JOIN productos p ON p.categoryId = c.id_categoria WHERE p.id_producto = ?', [idProduct]);
//     (await connect()).end;
//     return res.json(products[0]);
// }

// export async function getAllProductsByCategorySelect(req:Request, res:Response):Promise<Response> {
//     const conn = await connect();
//     const categories = await conn.query('SELECT p.id_producto, p.nombre AS nombre, c.nombre AS categoryIdNombre, p.categoryId, p.precio, p.existencia, p.descripcion, p.marca, p.img, p.disponibilidad, p.color, p.review FROM productos p INNER JOIN categorias c ON c.id_categoria = p.categoryId GROUP BY p.categoryId');
//     (await connect()).end;
//     return res.json(categories[0]);
// }

export async function createProduct(req:Request, res:Response) {
    const newProduct:Product = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO productos SET ?', [newProduct]); 
    (await connect()).end;
    return res.json({
        message: 'producto creado'
    })
}

export async function getIdProduct(req:Request, res:Response):Promise<Response> {
    const idProduct = req.params.idProducto;
    const conn = await connect();
    const products = await conn.query('SELECT * FROM productos WHERE id_producto = ?', [idProduct]);
    (await connect()).end;
    return res.json(products[0]);
}

export async function deleteIdProduct(req:Request, res: Response) {
    const idProduct = req.params.idProducto;
    const conn = await connect();
    await conn.query('DELETE FROM productos WHERE id_producto = ?', [idProduct]);
    (await connect()).end;
    return res.json({
        message: 'producto eliminado'
    });
}

export async function updateProduct(req:Request, res:Response) {
    const idProduct = req.params.idProducto;
    const updateId:Product = req.body;
    const conn = await connect();
    await conn.query('UPDATE productos SET ? WHERE id_producto = ?', [updateId, idProduct]);
    (await connect()).end;
    return res.json({
        message: 'Producto actualizado'
    })
}