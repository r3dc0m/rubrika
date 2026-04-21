import evaluationModel from "../../models/modelEvaluations.js";

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
        const newEvaluation = await evaluationModel.create(req.body);
        res.status(201).json(newEvaluation);
    } catch (error) {
        res.status(500).json({ error: "Error al crear la evaluación" });
    }
}

export const functions = {
    getAllEvaluations,
    getEvaluationById,
    createEvaluation
};

export default functions;