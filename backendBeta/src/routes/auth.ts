import { Router } from "express";
import { product, productlist, profile, signin, signup } from "../controllers/authController";
import { TokenValidation } from "../libs/verifyToken";

const router: Router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', TokenValidation, profile);

router.post('/product', product);
router.get('/productlist', productlist);

export default router;