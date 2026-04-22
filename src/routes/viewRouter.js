import { Router } from "express";
import viewRouterUser from "./views/viewRouterUser.js";
import viewRouterProject from "./views/viewRouterProject.js";

const router = Router();

router.use("/users", viewRouterUser);
router.use("/projects", viewRouterProject);

export default router;