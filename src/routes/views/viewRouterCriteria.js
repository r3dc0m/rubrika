import { Router } from "express";
import criteriaViewsController from "../../controllers/views/controllerCriteriaViews.js";

const viewRouterCriteria = Router();

viewRouterCriteria.get("/", criteriaViewsController.getAllCriteriaView);
viewRouterCriteria.get("/:id", criteriaViewsController.getCriteriaByIdView);

export default viewRouterCriteria;