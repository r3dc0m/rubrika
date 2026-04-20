import { Router } from "express";
import tasksController from "../../controllers/api/tasksController.js";

const tasksRouter = Router();

tasksRouter.get("/",tasksController.getAllTasks);
tasksRouter.get("/:id",tasksController.getTasksById);

export default tasksRouter;