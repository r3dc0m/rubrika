import { Router } from "express";
import routerUser from "./routerUser.js";


const router = Router();

router.use("/user",routerUser);

export default router;