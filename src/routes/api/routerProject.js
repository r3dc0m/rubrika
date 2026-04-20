import { Router } from "express";
import projectController from "../../controllers/api/projectController.js";

const routerProject = Router();

routerProject.get("/", projectController.getAllProjects);
routerProject.get("/:id", projectController.getProjectById);
routerProject.post("/", projectController.createProject);
routerProject.put("/:id", projectController.updateProject);
routerProject.delete("/:id", projectController.deleteProject);

export default routerProject;
