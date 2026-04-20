import { Router } from "express";
import criteriaController from "../../controllers/api/controllerCriteria.js";

const routerCriteria = Router();

routerCriteria.get("/", criteriaController.getAllCriteria);

routerCriteria.get("/:id", criteriaController.getCriteriaById);

routerCriteria.post("/", criteriaController.createCriteria);

routerCriteria.delete("/:id", criteriaController.deleteCriteria);

export default routerCriteria;