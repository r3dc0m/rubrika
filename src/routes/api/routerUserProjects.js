import { Router } from "express";
import userProjectsController from "../../controllers/api/controllerUserProjects.js";

const userProjectsRouter = Router();

userProjectsRouter.get("/",userProjectsController.getAllUserProjects);

export default userProjectsRouter;