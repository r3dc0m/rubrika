import evaluationModel from "../../models/modelEvaluations.js";
import projectModel from "../../models/modelProjects.js";
import criteriaModel from "../../models/modelCriterias.js";
import evaluationsCriteriaModel from "../../models/modelEvaluationsCriteria.js";

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

async function renderCreateForm(req, res) {
    try {
        const projects = await projectModel.findAll();
        const criteria = await criteriaModel.findAll();
        
        res.render("evaluations/form", { 
            title: "Nueva Evaluación",
            projects,
            criteria,
            evaluation: null, 
            criteriaScores: {} 
        });
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al cargar el formulario" 
        });
    }
}

async function renderEditForm(req, res) {
    try {
        const id = parseInt(req.params.id);
        
        // Traer la evaluación
        const evaluation = await evaluationModel.findByPk(id);
        
        if (!evaluation) {
            return res.status(404).render("error", { 
                title: "Error",
                message: "Evaluación no encontrada" 
            });
        }
        
        const projects = await projectModel.findAll();
        const criteria = await criteriaModel.findAll();
    
        const evaluationCriteria = await evaluationsCriteriaModel.findAll({
            where: { evaluation_id: id }
        });
        
        const criteriaScores = {};
        evaluationCriteria.forEach(ec => {
            criteriaScores[ec.criteria_id] = ec.mark;
        });
        
        res.render("evaluations/form", { 
            title: "Editar Evaluación",
            projects,
            criteria,
            evaluation, 
            criteriaScores 
        });
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al cargar el formulario" 
        });
    }
}

export const functions = {
    getAllEvaluationsView,
    getevaluationByIdView,
    renderCreateForm,
    renderEditForm
};

export default functions;