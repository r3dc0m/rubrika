import { Router } from "express";
import userProjectsController from "../../controllers/api/userProjectsController.js";

const userProjectsRouter = Router();

userProjectsRouter.get("/",userProjectsController.getAllUserProjects);

export default userProjectsRouter;