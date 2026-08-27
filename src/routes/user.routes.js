import { Router } from "express";
import upload from "../middlewares/upload.middleware.js";
import { userInput } from "../controllers/user.controller.js"; 

const router = Router() 

router.post(
    '/document',
    upload.single("file"), 
    userInput
)

export default router 