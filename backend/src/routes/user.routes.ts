import { Router } from "express";
import { createUsers, getUsers, getUserId, deleteUserId, updateUser, getUserEmail } from "../controllers/user.controller";

const router = Router();

router.route('/userEmail')
    .get(getUserEmail)
    
router.route('/')
    .get(getUsers)
    .post(createUsers)

router.route('/:userId')
    .get(getUserId)
    .delete(deleteUserId)
    .put(updateUser)


    
export default router;