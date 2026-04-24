import { Router } from "express";
import viewRouterUser from "./views/viewRouterUser.js";
import viewRouterProject from "./views/viewRouterProject.js";
import viewRouterTasks from "./views/viewRouterTasks.js";
import viewRouterEvaluations from "./views/viewRouterEvaluations.js";
import viewRouterCriteria from "./views/viewRouterCriteria.js";
import viewAuthRoutes from './views/viewRouterAuth.js';

const router = Router();

router.use("/users", viewRouterUser);
router.use("/projects", viewRouterProject);
router.use("/tasks", viewRouterTasks);
router.use("/evaluations", viewRouterEvaluations);
router.use("/criteria", viewRouterCriteria);
router.use("/login", viewAuthRoutes);  // ← Montado en /login

export default router;
