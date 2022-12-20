import { Router } from "express";
import { createCategory, deleteIdCategory, getAllCategories, getAllProductsByCategory, getIdCategory, updateCategory } from "../controllers/category.controller";

const router = Router();

router.route('/')
    .get(getAllCategories)
    .post(createCategory)

router.route('/:idCategoria')
    .get(getIdCategory)
    .delete(deleteIdCategory)
    .put(updateCategory)
router.route('/by/:idCategoria')
    .get(getAllProductsByCategory)

export default router;