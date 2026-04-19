import { Router } from "express";
import apiRouter from "./api/apiRouter.js";

const router = Router();

router.use("/api", apiRouter);

export default router;