import { Router } from "express";
import viewRouterUser from "./views/viewRouterUser.js";
import viewRouterTask from "./views/viewRouterTasks.js";


const router = Router();

router.use("/users", viewRouterUser);
router.use("/tasks", viewRouterTask);

export default router;