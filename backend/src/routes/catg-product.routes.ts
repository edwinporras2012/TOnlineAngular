import { Router } from "express";
import { getAllProductsByCategory, getAllProductsByCategorySelect, getAllProductsByIdProduct } from "../controllers/catg-product.controller";

const router = Router();

router.route('/')
    .get(getAllProductsByCategorySelect)

router.route('/bycategory/:idCategoria')
    .get(getAllProductsByCategory)

router.route('/byproduct/:idProduct')
    .get(getAllProductsByIdProduct)



export default router;