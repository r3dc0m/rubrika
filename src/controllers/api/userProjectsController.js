import userProjectsModel from "../../models/userProjectsModel.js";

async function getAllUserProjects(req, res) {

    try {
        const userProjects = await userProjectsModel.findAll();
        res.json(userProjects);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const functions = {
    getAllUserProjects
}

export default functions;