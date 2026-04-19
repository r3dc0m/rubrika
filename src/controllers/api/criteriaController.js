import criteriaModel from "../../models/criteriaModel.js";

async function getAllCriteria(req, res) {
    try {
        const criteria = await criteriaModel.findAll();
        res.json(criteria);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los criterios" });
    }
}

async function getCriteriaById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const criteria = await criteriaModel.findByPk(id);

        if (!criteria) {
            return res.status(404).json({ error: "Criterio no encontrado" });
        }

        res.json(criteria);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el criterio" });
    }
}

async function createCriteria(req, res) {
    try {
        const newCriteria = await criteriaModel.create(req.body);
        res.status(201).json(newCriteria);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el criterio" });
    }
}

async function deleteCriteria(req, res) {
    try {
        const id = parseInt(req.params.id);
        const deleted = await criteriaModel.destroy({ where: { criteria_id: id } });

        if (!deleted) {
            return res.status(404).json({ error: "Criterio no encontrado" });
        }

        res.json({ message: "Criterio eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el criterio" });
    }
}

export const functions = {
    getAllCriteria,
    getCriteriaById,
    createCriteria,
    deleteCriteria
};

export default functions;