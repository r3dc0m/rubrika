import { Router } from "express";
import viewRouterUser from "./views/viewRouterUser.js";
<<<<<<< HEAD
=======
import viewRouterProject from "./views/viewRouterProject.js";
import viewRouterTask from "./views/viewRouterTasks.js";
import viewRouterEvaluations from "./views/viewRouterEvaluations.js";

>>>>>>> origin/dev

const router = Router();

router.use("/users", viewRouterUser);
<<<<<<< HEAD
=======
router.use("/projects", viewRouterProject);
router.use("/tasks", viewRouterTask);
router.use("/evaluations", viewRouterEvaluations);

>>>>>>> origin/dev

export default router;