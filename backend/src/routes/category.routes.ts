import { Router } from "express";
import { createCategory, deleteIdCategory, getAllCategories, getIdCategory, updateCategory } from "../controllers/category.controller";

const router = Router();

router.route('/')
    .get(getAllCategories)
    .post(createCategory)

router.route('/:idCategoria')
    .get(getIdCategory)
    .delete(deleteIdCategory)
    .put(updateCategory)

export default router;