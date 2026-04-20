import tasksModel from "../../models/tasksModel.js";

function getParsedId(id) {
    const idNum = parseInt(id);
    if (!idNum || isNaN(idNum)) {
        throw new Error("ID no válido");
    }
    return idNum;
}

async function getAllTasks(req, res) {

    try {
        const tasks = await tasksModel.findAll();
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function getTasksById(req, res) {
    try {
        const id = getParsedId(req.params.id);
        const task = await tasksModel.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: "tarea no encontrada" });
        }
        res.json(task);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const functions = {
    getAllTasks,
    getTasksById,
}

export default functions;