import { Router } from "express";
import viewRouterUser from "./views/viewRouterUser.js";
import viewRouterProject from "./views/viewRouterProject.js";
import viewRouterTasks from "./views/viewRouterTasks.js";
import viewRouterCriteria from "./views/viewRouterCriteria.js";

const router = Router();

router.use("/users", viewRouterUser);
router.use("/projects", viewRouterProject);
router.use("/tasks", viewRouterTasks);
router.use("/criteria", viewRouterCriteria);

export default router;