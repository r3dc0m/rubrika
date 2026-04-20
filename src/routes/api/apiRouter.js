import { Router } from "express";
import appRouter from "./api/appRouter.js";
import routerUser from "./api/routerUser.js";
import routerProject from "./api/routerProject.js";

const router = Router();

router.use("/api", appRouter);
router.use("/api", routerUser);
router.use("/api", routerProject);

export default router;