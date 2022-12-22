import { Router } from "express";
import { getAllProducts, createProduct, getIdProduct, deleteIdProduct, updateProduct } from "../controllers/product.controller";

const router = Router();

router.route('/')
    .get(getAllProducts)
    .post(createProduct);
router.route('/:idProducto')
    .get(getIdProduct)
    .delete(deleteIdProduct)
    .put(updateProduct);
// router.route('/category/:idProductCategory')    
//     .get(getAllProductsByCategory)

export default router;