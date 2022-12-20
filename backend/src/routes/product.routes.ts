import { Router } from "express";
import { getAllProducts, createProduct, getIdProduct, deleteIdProduct, updateProduct, getAllProductsByIdProduct, getAllProductsByCategorySelect } from "../controllers/product.controller";

const router = Router();

router.route('/')
    .get(getAllProducts)
    .post(createProduct);
router.route('/:idProducto')
    .get(getIdProduct)
    .delete(deleteIdProduct)
    .put(updateProduct);
router.route('/by/:idProduct')
    .get(getAllProductsByIdProduct);
router.route('/by')
    .get(getAllProductsByCategorySelect);
// router.route('/category/:idProductCategory')    
//     .get(getAllProductsByCategory)

export default router;