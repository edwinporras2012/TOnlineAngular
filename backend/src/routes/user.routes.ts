import { Router } from "express";
import { createUsers, getUsers, getUserId, deleteUserId, updateUser } from "../controllers/user.controller";

const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUsers)

router.route('/:userId')
    .get(getUserId)
    .delete(deleteUserId)
    .put(updateUser)

export default router;