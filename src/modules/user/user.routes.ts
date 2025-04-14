import { Router } from "express";
import userController from "./User";

const router = Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);

export default router;
