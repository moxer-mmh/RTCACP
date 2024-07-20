import exp from "constants";
import express from "express";
import { signin, signup, signout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);

export default router;
