import { Router } from "express";
import evaluationController from "../../controllers/api/controllerEvaluation.js";

const routerEvaluation = Router();

routerEvaluation.get("/", evaluationController.getAllEvaluations);

routerEvaluation.get("/:id", evaluationController.getEvaluationById);

routerEvaluation.post("/", evaluationController.createEvaluation);

routerEvaluation.put("/:id", evaluationController.updateEvaluation);

routerEvaluation.delete("/:id", evaluationController.deleteEvaluation);

export default routerEvaluation;