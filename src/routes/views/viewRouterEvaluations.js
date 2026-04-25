import { Router } from "express";
import evaluationViewController from "../../controllers/views/controllerEvaluationsViews.js";
import evaluationModel from "../../models/modelEvaluations.js";
import evaluationsCriteriaModel from "../../models/modelEvaluationsCriteria.js";
import { requireRoleView, isLoggedIn } from "../../middleweares/middlewareAuth.js";

const viewRouterEvaluations = Router();

viewRouterEvaluations.get("/", isLoggedIn, evaluationViewController.getAllEvaluationsView);
viewRouterEvaluations.get("/new", isLoggedIn, evaluationViewController.renderCreateForm);
viewRouterEvaluations.get("/:id/edit", isLoggedIn, evaluationViewController.renderEditForm);
viewRouterEvaluations.get("/:id", requireRoleView('profesor'), evaluationViewController.getevaluationByIdView);

viewRouterEvaluations.post("/create", isLoggedIn, async (req, res) => {
    try {
        const { project_id, general_comment, criteria_scores } = req.body;
        const user_id = req.session.user.id || 1;
        
        const newEvaluation = await evaluationModel.create({
            user_id,
            project_id,
            general_comment
        });
        
        if (criteria_scores) {
            const criteriaData = Object.keys(criteria_scores).map(criteria_id => ({
                evaluation_id: newEvaluation.evaluation_id,
                criteria_id: parseInt(criteria_id),
                mark: parseInt(criteria_scores[criteria_id])
            }));
            
            await evaluationsCriteriaModel.bulkCreate(criteriaData);
        }
        
        res.redirect("/evaluations");
    } catch (error) {
        console.error(error);
        res.redirect("/evaluations");
    }
});

viewRouterEvaluations.post("/:id/update", isLoggedIn, async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { project_id, general_comment, criteria_scores } = req.body;
        
        const evaluation = await evaluationModel.findByPk(id);
        
        if (evaluation) {
            await evaluation.update({
                project_id,
                general_comment
            });
            
            if (criteria_scores) {
                await evaluationsCriteriaModel.destroy({
                    where: { evaluation_id: id }
                });
                
                const criteriaData = Object.keys(criteria_scores).map(criteria_id => ({
                    evaluation_id: id,
                    criteria_id: parseInt(criteria_id),
                    mark: parseInt(criteria_scores[criteria_id])
                }));
                
                await evaluationsCriteriaModel.bulkCreate(criteriaData);
            }
        }
        
        res.redirect("/evaluations");
    } catch (error) {
        console.error(error);
        res.redirect("/evaluations");
    }
});

viewRouterEvaluations.post("/:id/delete", isLoggedIn, async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const evaluation = await evaluationModel.findByPk(id);
        
        if (evaluation) {
            await evaluation.destroy();
        }
        
        res.redirect("/evaluations");
    } catch (error) {
        console.error(error);
        res.redirect("/evaluations");
    }
});

export default viewRouterEvaluations;