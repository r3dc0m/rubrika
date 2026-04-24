import { Router } from "express";
import projectViewsController from "../../controllers/views/controllerProjectViews.js";

const viewRouterProject = Router();

viewRouterProject.get("/", projectViewsController.getAllProjectsView);
viewRouterProject.get("/:id", projectViewsController.getProjectByIdView);

export default viewRouterProject;