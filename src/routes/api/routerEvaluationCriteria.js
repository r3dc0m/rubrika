import { Router } from "express";
import evaluationCriteriaController from "../../controllers/api/controllerEvaluationCriteria.js";

const routerEvaluationCriteria = Router();

routerEvaluationCriteria.get("/", evaluationCriteriaController.getAllEvaluationCriteria);
routerEvaluationCriteria.get("/:id", evaluationCriteriaController.getEvaluationCriteriaById);
routerEvaluationCriteria.post("/", evaluationCriteriaController.createEvaluationCriteria);
routerEvaluationCriteria.put("/:id", evaluationCriteriaController.updateEvaluationCriteria);
routerEvaluationCriteria.delete("/:id", evaluationCriteriaController.deleteEvaluationCriteria);

export default routerEvaluationCriteria;