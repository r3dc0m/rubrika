import { Router } from "express";
import taskViewController from "../../controllers/views/controllerTasksViews.js";
import { requireRole, isLoggedIn } from "../../middleweares/middlewareAuth.js";

const viewRouterTask = Router();

viewRouterTask.get("/", isLoggedIn, taskViewController.getAllTasksView);

viewRouterTask.get("/:id", isLoggedIn, taskViewController.getTasksByIdView);

// viewRouterTask.get("/create", requireRole('profesor'), taskViewController.showCreateTaskForm);
// viewRouterTask.post("/create", requireRole('profesor'), taskViewController.createTask);

// viewRouterTask.get("/edit/:id", requireRole('profesor'), taskViewController.showEditTaskForm);
// viewRouterTask.post("/edit/:id", requireRole('profesor'), taskViewController.updateTask);

// viewRouterTask.post("/delete/:id", requireRole('profesor'), taskViewController.deleteTask);

// viewRouterTask.post("/:id/submit", requireRole('alumno'), taskViewController.submitTask);

export default viewRouterTask;