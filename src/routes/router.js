import {Router} from "express";
import appRouter from "./api/appRouter.js";
import routerUser from "./api/routerUser.js";


const router = Router();

<<<<<<< Updated upstream

//router.use("/",viewRouter);
router.use("/api",apiRouter);
=======
router.use("/api",appRouter); //para modelo de claves foraneas. no usar de momento!
router.use("/api",routerUser);
>>>>>>> Stashed changes

export default router;