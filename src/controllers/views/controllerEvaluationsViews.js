import evaluationModel from "../../models/modelEvaluations.js";

async function getAllEvaluationsView(req, res) {
    try {
        const evaluations = await evaluationModel.findAll();
        res.render("evaluations/list", { 
            title: "Lista de evaluaciones",
            evaluations: evaluations 
        });
    } catch (error) {
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al obtener las evaluaciones" 
        });
    }
}

async function getevaluationByIdView(req, res) {
    try {
        const id = parseInt(req.params.id);
        const evaluation = await evaluationModel.findByPk(id);
        
        if (!evaluation) {
            return res.status(404).render("error", { 
                title: "Error",
                message: "Evaluación no encontrada" 
            });
        }
        
        res.render("evaluations/detail", { 
            title: "Detalle evaluación",
            evaluation: evaluation 
        });
    } catch (error) {
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al obtener la evaluación" 
        });
    }
}

export const functions = {
    getAllEvaluationsView,
    getevaluationByIdView
};

export default functions;