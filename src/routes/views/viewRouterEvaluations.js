import { Router } from "express";
import evaluationViewController from "../../controllers/views/controllerEvaluationsViews.js";
import evaluationController from "../../controllers/api/controllerEvaluation.js";

const viewRouterEvaluations = Router();

viewRouterEvaluations.get("/", evaluationViewController.getAllEvaluationsView);
viewRouterEvaluations.get("/new", evaluationViewController.renderCreateForm);
viewRouterEvaluations.get("/:id/edit", evaluationViewController.renderEditForm);
viewRouterEvaluations.get("/:id", evaluationViewController.getevaluationByIdView);

viewRouterEvaluations.post("/create", async (req, res) => {
    await evaluationController.createEvaluation(req, res);
    res.redirect("/evaluations");
});

viewRouterEvaluations.post("/:id/update", async (req, res) => {
    await evaluationController.updateEvaluation(req, res);
    res.redirect("/evaluations");
});

viewRouterEvaluations.post("/:id/delete", async (req, res) => {
    await evaluationController.deleteEvaluation(req, res);
    res.redirect("/evaluations");
});

export default viewRouterEvaluations;