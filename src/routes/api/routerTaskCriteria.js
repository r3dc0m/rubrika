import { Router } from "express";
import taskCriteriaController from "../../controllers/api/controllerTaskCriteria.js";

const taskCriteriaRouter = Router();

taskCriteriaRouter.get("/",taskCriteriaController.getAllTaskCriteria);

export default taskCriteriaRouter;