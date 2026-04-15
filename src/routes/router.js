import {Router} from "express";
import apiRouter from "./api/apiRouter.js";
import viewRouter from "./view/viewRouter.js";


const router = Router();


//router.use("/",viewRouter);
//router.use("/api",apiRouter);

export default router;