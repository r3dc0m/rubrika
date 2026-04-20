import { Router } from "express";

import routerUser from "./routerUser.js";
import routerProject from "./routerProject.js";
import routerCriteria from "./routerCriteria.js";
import routerEvaluation from "./routerEvaluation.js";

const router = Router();

router.use("/user", routerUser);
router.use("/project", routerProject);
router.use("/criteria", routerCriteria);
router.use("/evaluations", routerEvaluation);

export default router;