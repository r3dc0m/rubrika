import criteriaModel from "../../models/modelCriteria.js";

async function getAllCriteriaView(req, res) {
    try {
        const criteria = await criteriaModel.findAll();
        res.render("criteria/list", { 
            title: "Lista de criterios",
            criteria: criteria 
        });
    } catch (error) {
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al obtener los criterios" 
        });
    }
}

async function getCriteriaByIdView(req, res) {
    try {
        const id = parseInt(req.params.id);
        const criteria = await criteriaModel.findByPk(id);
        
        if (!criteria) {
            return res.status(404).render("error", { 
                title: "Error",
                message: "Criterio no encontrado" 
            });
        }
        
        res.render("criteria/detail", { 
            title: "Detalle criterio",
            criteria: criteria 
        });
    } catch (error) {
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al obtener el criterio" 
        });
    }
}

export const functions = {
    getAllCriteriaView,
    getCriteriaByIdView
};

export default functions;