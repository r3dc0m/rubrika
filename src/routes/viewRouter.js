import { Router } from "express";
import viewRouterUser from "./views/viewRouterUser.js";

const router = Router();

router.use("/users", viewRouterUser);

export default router;