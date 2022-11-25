import { Router } from "express";
import { profile, signin, signup } from "../controllers/authController";
import { TokenValidation } from "../libs/verifyToken";

const router: Router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', TokenValidation, profile);

export default router;