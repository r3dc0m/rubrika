import { Router } from "express";
import taskViewController from "../../controllers/views/controllerTasksViews.js";

const viewRouterTask = Router();

viewRouterTask.get("/", taskViewController.getAllTasksView);
viewRouterTask.get("/:id", taskViewController.getTasksByIdView);

export default viewRouterTask;