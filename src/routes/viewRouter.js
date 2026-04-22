import { Router } from "express";
import viewRouterUser from "./views/viewRouterUser.js";
import viewRouterProject from "./views/viewRouterProject.js";
import viewRouterTask from "./views/viewRouterTasks.js";
import viewRouterEvaluations from "./views/viewRouterEvaluations.js";


const router = Router();

router.use("/users", viewRouterUser);
router.use("/projects", viewRouterProject);
router.use("/tasks", viewRouterTask);
router.use("/evaluations", viewRouterEvaluations);


export default router;