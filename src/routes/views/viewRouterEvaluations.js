import { Router } from "express";
import evaluationViewController from "../../controllers/views/controllerEvaluationsViews.js";
import { requireRole, isLoggedIn } from "../../middleweares/middlewareAuth.js";

const viewRouterEvaluations = Router();

viewRouterEvaluations.get("/", isLoggedIn, evaluationViewController.getAllEvaluationsView);

viewRouterEvaluations.get("/:id", requireRole('profesor'), evaluationViewController.getevaluationByIdView);

export default viewRouterEvaluations;