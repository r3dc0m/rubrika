import { Router } from "express";

import appRouter from "./api/appRouter.js";
import routerUser from "./api/routerUser.js";
import routerProject from "./api/routerProject.js";
import routerEvaluationCriteria from "./api/routerEvaluationCriteria.js";
import apiRouter from "./api/apiRouter.js";
const router = Router();

router.use("/api", appRouter);
router.use("/api", routerUser);
router.use("/api/projects", routerProject);
router.use("/api/evaluation-criteria", routerEvaluationCriteria);

export default router;