import { Router } from "express";

import appRouter from "./api/appRouter.js";
import routerUser from "./api/routerUser.js";
import routerProject from "./api/routerProject.js";
import routerCriteria from "./routerCriteria.js";
import routerEvaluation from "./routerEvaluation.js";

const router = Router();

router.use("/api", appRouter);
router.use("/api", routerUser);
router.use("/api", routerProject);
router.use("/user", routerUser);
router.use("/criteria", routerCriteria);
router.use("/evaluations", routerEvaluation);

export default router;