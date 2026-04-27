import taskCriteriaModel from "../../models/modelTaskCriteria.js";

async function getAllTaskCriteria(req, res) {

    try {
        const taskCriteria = await taskCriteriaModel.findAll();
        res.json(taskCriteria);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const functions = {
    getAllTaskCriteria
}

export default functions;