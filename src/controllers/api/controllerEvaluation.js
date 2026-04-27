import evaluationModel from "../../models/modelEvaluations.js";
import evaluationsCriteriaModel from "../../models/modelEvaluationsCriteria.js";

async function getAllEvaluations(req, res) {
    try {
        const evaluations = await evaluationModel.findAll();
        res.json(evaluations);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las evaluaciones" });
    }
}

async function getEvaluationById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const evaluation = await evaluationModel.findByPk(id);

        if (!evaluation) {
            return res.status(404).json({ error: "Evaluación no encontrada" });
        }

        res.json(evaluation);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la evaluación" });
    }
}

async function createEvaluation(req, res) {
    try {
        const { project_id, general_comment, criteria_scores } = req.body;
        
        const user_id = 1; 
    
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
        
        res.status(201).json(newEvaluation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear la evaluación" });
    }
}

async function updateEvaluation(req, res) {
    try {
        const id = parseInt(req.params.id);
        const { project_id, general_comment, criteria_scores } = req.body;
        
        const evaluation = await evaluationModel.findByPk(id);
        
        if (!evaluation) {
            return res.status(404).json({ error: "Evaluación no encontrada" });
        }
    
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
        
        res.json({ message: "Evaluación actualizada correctamente", evaluation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar la evaluación" });
    }
}

async function deleteEvaluation(req, res) {
    try {
        const id = parseInt(req.params.id);
        
        const evaluation = await evaluationModel.findByPk(id);
        
        if (!evaluation) {
            return res.status(404).json({ error: "Evaluación no encontrada" });
        }
        
        await evaluation.destroy();
        
        res.json({ message: "Evaluación eliminada correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar la evaluación" });
    }
}

export const functions = {
    getAllEvaluations,
    getEvaluationById,
    createEvaluation,
    updateEvaluation,
    deleteEvaluation
};

export default functions;