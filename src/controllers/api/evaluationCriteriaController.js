import evaluationCriteriaModel from "../../models/evaluationCriteriaModel.js";

async function getAllEvaluationCriteria(req, res) {
    const evaluationCriteria = await evaluationCriteriaModel.findAll();
    res.json(evaluationCriteria);
}

async function getEvaluationCriteriaById(req, res) {
    const id = parseInt(req.params.id);
    const evaluationCriteria = await evaluationCriteriaModel.findOne({
        where: { evaluation_id: id }
    });
    res.json(evaluationCriteria);
}

async function createEvaluationCriteria(req, res) {
    const newEvaluationCriteria = await evaluationCriteriaModel.create(req.body);
    res.json(newEvaluationCriteria);
}

async function updateEvaluationCriteria(req, res) {
    const id = parseInt(req.params.id);
    await evaluationCriteriaModel.update(req.body, {
        where: { evaluation_id: id }
    });
    const evaluationCriteria = await evaluationCriteriaModel.findOne({
        where: { evaluation_id: id }
    });
    res.json(evaluationCriteria);
}

async function deleteEvaluationCriteria(req, res) {
    const id = parseInt(req.params.id);
    await evaluationCriteriaModel.destroy({
        where: { evaluation_id: id }
    });
    res.json({ message: "Eliminado correctamente" });
}

export const functions = {
    getAllEvaluationCriteria,
    getEvaluationCriteriaById,
    createEvaluationCriteria,
    updateEvaluationCriteria,
    deleteEvaluationCriteria
}

export default functions;