import { Router } from "express";
import { isLoggedIn, requireRoleApi } from "../middleweares/middlewareAuth.js";
import viewRouterUser from "./views/viewRouterUser.js";
import viewRouterProject from "./views/viewRouterProject.js";
import viewRouterTasks from "./views/viewRouterTasks.js";
import viewRouterEvaluations from "./views/viewRouterEvaluations.js";
import viewRouterCriteria from "./views/viewRouterCriteria.js";
import viewAuthRoutes from './views/viewRouterAuth.js';
import { logout } from '../controllers/views/controllerAuthView.js';

const router = Router();

router.use("/login", viewAuthRoutes);
router.get("/logout", logout);
router.use("/users", isLoggedIn, requireRoleApi('profesor'), viewRouterUser);
router.use("/projects", isLoggedIn, viewRouterProject);
router.use("/tasks", isLoggedIn, viewRouterTasks);
router.use("/evaluations", isLoggedIn, viewRouterEvaluations);
router.use("/criteria", isLoggedIn, viewRouterCriteria);

export default router;