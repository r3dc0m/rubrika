import { Router } from "express";
import { isLoggedIn, requireRoleApi } from "../middleweares/middlewareAuth.js";

import routerCriteria from "./api/routerCriteria.js";
import routerEvaluation from "./api/routerEvaluation.js";
import routerEvaluationCriteria from "./api/routerEvaluationCriteria.js";
import routerProject from "./api/routerProject.js";
import routerTaskCriteria from "./api/routerTaskCriteria.js";
import routerTasks from "./api/routerTasks.js";
import routerUser from "./api/routerUser.js";
import routerUserProjects from "./api/routerUserProjects.js";
import routerGetTaskDetails from "./views/routerTaskDetails.js";
import routerAuth from "./api/routerAuth.js";

const router = Router();

router.use("/auth", routerAuth);
router.use("/criteria", isLoggedIn, routerCriteria);
router.use("/evaluations", isLoggedIn, routerEvaluation);
router.use("/evaluations-criteria", isLoggedIn, routerEvaluationCriteria);
router.use("/project", isLoggedIn, routerProject);
router.use("/task-criteria", isLoggedIn, routerTaskCriteria);
router.use("/tasks", isLoggedIn, routerTasks);
router.use("/user", isLoggedIn, requireRoleApi('profesor'), routerUser);
router.use("/user-projects", isLoggedIn, routerUserProjects);
router.use("/", isLoggedIn, routerGetTaskDetails);

export default router;