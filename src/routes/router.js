import {Router} from "express";
import appRouter from "./api/appRouter.js";
import routerUser from "./api/routerUser.js";


const router = Router();

router.use("/api",appRouter); //para modelo de claves foraneas. no usar de momento!
router.use("/api",routerUser);

export default router;