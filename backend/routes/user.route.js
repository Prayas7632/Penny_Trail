import express from "express"
import { login, logout, register } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/register").post(login);
router.route("/register").get(logout);


export default router;