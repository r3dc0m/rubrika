import { Router } from "express";
import evaluationController from "../../controllers/api/evaluationController.js";

const routerEvaluation = Router();

routerEvaluation.get("/", evaluationController.getAllEvaluations);

routerEvaluation.get("/:id", evaluationController.getEvaluationById);

routerEvaluation.post("/", evaluationController.createEvaluation);

export default routerEvaluation;