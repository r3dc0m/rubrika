import { Router } from "express";
import viewController from "../../controllers/views/controllerViewTaskDetails.js";

const routerGetTaskDetails = Router();

routerGetTaskDetails.get("/getTaskDetail/:id",viewController.getTaskDetail);
routerGetTaskDetails.get("/getAllTasks",viewController.getAllTasks);

export default routerGetTaskDetails;