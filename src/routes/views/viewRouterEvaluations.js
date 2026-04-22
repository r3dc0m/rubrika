import { Router } from "express";
import evaluationViewController from "../../controllers/views/controllerEvaluationsViews.js";

const viewRouterEvaluations = Router();

viewRouterEvaluations.get("/", evaluationViewController.getAllEvaluationsView);
viewRouterEvaluations.get("/:id", evaluationViewController.getevaluationByIdView);

export default viewRouterEvaluations;