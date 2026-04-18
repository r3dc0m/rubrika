import tasksModel from "../../models/tasksModel.js";

async function getAllTasks(req, res) {

    // try {
        const tasks = await tasksModel.findAll();
        res.json(tasks);
    // }
    // catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
}
export const functions = {
    getAllTasks
}

export default functions;