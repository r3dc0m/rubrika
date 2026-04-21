import { Router } from "express";

import routerCriteria from "./api/routerCriteria.js";
import routerEvaluation from "./api/routerEvaluation.js";
import routerEvaluationCriteria from "./api/routerEvaluationCriteria.js";
import routerProject from "./api/routerProject.js";
import routerTaskCriteria from "./api/routerTaskCriteria.js";
import routerTasks from "./api/routerTasks.js";
import routerUser from "./api/routerUser.js";
import routerUserProjects from "./api/routerUserProjects.js";

const router = Router();

router.use("/criteria", routerCriteria);
router.use("/evaluations", routerEvaluation);
router.use("/evaluations-criteria", routerEvaluationCriteria);
router.use("/project", routerProject);
router.use("/task-criteria", routerTaskCriteria);
router.use("/tasks", routerTasks);
router.use("/user", routerUser);
router.use("/user-projects", routerUserProjects);



export default router;